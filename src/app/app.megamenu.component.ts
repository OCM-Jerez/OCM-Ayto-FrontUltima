import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgModule, OnDestroy, OnInit, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MegaMenuItem } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { Subscription } from 'rxjs';
import { MenuService } from './app.menu.service';

@Component({
    /* tslint:disable:component-selector */
    selector: '[app-megamenuitem]',
    /* tslint:enable:component-selector */
    template: `
        <ng-container>
            <a [attr.href]="item.url" (click)="itemClick($event)" [ngClass]="{'layout-megasubmenu-active': active}" *ngIf="!item.routerLink || item.items" (keydown.enter)="itemClick($event)"
                [attr.target]="item.target" [attr.tabindex]="0" [ngClass]="item.class" pRipple>
                <i [ngClass]="item.icon" class="layout-megamenuitem-icon"></i>
                <p>{{item.label}}</p>
                <i class="pi pi-fw pi-angle-down layout-megasubmenu-toggler" *ngIf="item.items"></i>
            </a>
            <a (click)="itemClick($event)" *ngIf="item.routerLink && !item.items"
                [routerLink]="item.routerLink" routerLinkActive="layout-megamenuitem-active" [routerLinkActiveOptions]="{exact: true}"
                [attr.target]="item.target" [attr.tabindex]="0" [ngClass]="item.class" pRipple>
                <i [ngClass]="item.icon" class="layout-megamenuitem-icon"></i>
                <p>{{item.label}}</p>
            </a>
            <ul *ngIf="item.items && active" [@children]="active ? 'visibleAnimated' : 'hiddenAnimated'">
                <ng-template ngFor let-child let-i="index" [ngForOf]="item.items">
                    <li app-megamenuitem [item]="child" [index]="i" [parentKey]="key"></li>
                </ng-template>
            </ul>
        </ng-container>
    `,
    host: {
    },
    animations: [
        trigger('children', [
            state('void', style({
                height: '0px',
                padding: '0px',
                overflow: 'hidden'
            })),
            state('hiddenAnimated', style({
                height: '0px',
                padding: '0px',
                overflow: 'hidden'
            })),
            state('visibleAnimated', style({
                height: '*'
            })),
            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('void => visibleAnimated, visibleAnimated => void',
                animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppMegaMenuItem implements OnInit, OnDestroy {

    @Input() item: any;

    @Input() index: number;

    @Input() root: boolean;

    @Input() parentKey: string;

    active = false;

    megaMenuSourceSubscription: Subscription;

    megaMenuResetSubscription: Subscription;

    key: string;

    constructor(private menuService: MenuService) {
        this.megaMenuSourceSubscription = this.menuService.megaMenuSource$.subscribe(key => {
            // deactivate current active menu
            if (this.active && this.key !== key && key.indexOf(this.key) !== 0) {
                this.active = false;
            }
        });

        this.megaMenuResetSubscription = this.menuService.resetMegaMenuSource$.subscribe(() => {
            this.active = false;
        });
    }

    ngOnInit() {
        this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
    }

    itemClick(event: Event) {
        if (this.item.disabled) {
            event.preventDefault();
            return true;
        }

        if (this.item.command) {
            this.item.command({originalEvent: event, item: this.item});
        }

        this.menuService.onMegaMenuStateChange(this.key);

        if (this.item.items) {
            this.active = !this.active;
        }
        else {
            this.active = true;
        }
    }

    ngOnDestroy() {
        if (this.megaMenuSourceSubscription) {
            this.megaMenuSourceSubscription.unsubscribe();
        }

        if (this.megaMenuResetSubscription) {
            this.megaMenuResetSubscription.unsubscribe();
        }
    }
}

@Component({
    selector: 'app-megaMenuSub',
    template: `
        <ul class="layout-megamenu p-reset p-px-2">
            <li *ngFor="let category of model">
                <span class="p-my-2 layout-megamenu-submenu-header" *ngIf="root">{{category.label}}</span>
                <ng-template ngFor let-column [ngForOf]="category.items">
                        <ul class="p-mb-3">
                            <li class="p-p-1" *ngFor="let item of column; let i = index;">
                                <a *ngIf="!item.routerLink && !item.items" role="menuitem" [href]="item.url||'#'" class="p-menuitem-link" [attr.target]="item.target" [attr.title]="item.title" [attr.id]="item.id" [attr.tabindex]="item.tabindex ? item.tabindex : '0'"
                                    [ngClass]="{'p-disabled':item.disabled}" (click)="itemClick($event, item)">
                                    <i class="p-menuitem-icon" *ngIf="item.icon" [ngClass]="item.icon"></i>
                                    <p>{{item.label}}</p>
                                </a>
                                <a *ngIf="item.routerLink && !item.items" role="menuitem" [routerLink]="item.routerLink" [queryParams]="item.queryParams" [routerLinkActive]="'layout-megamenuitem-active'" [attr.tabindex]="item.tabindex ? item.tabindex : '0'"
                                    [routerLinkActiveOptions]="item.routerLinkActiveOptions||{exact:false}" class="p-menuitem-link"
                                        [attr.target]="item.target" [attr.title]="item.title" [attr.id]="item.id"
                                    [ngClass]="{'p-disabled':item.disabled}" (click)="itemClick($event, item)"
                                    [fragment]="item.fragment" [queryParamsHandling]="item.queryParamsHandling" [preserveFragment]="item.preserveFragment" [skipLocationChange]="item.skipLocationChange" [replaceUrl]="item.replaceUrl" [state]="item.state">
                                    <i class="p-menuitem-icon" *ngIf="item.icon" [ngClass]="item.icon"></i>
                                    <p>{{item.label}}</p>
                                </a>
                                <div *ngIf="item.items" class="layout-megamenu-item" app-megamenuitem [item]="item" [index]="i" [root]="true" ></div>
                            </li>
                        </ul>
                </ng-template>
            </li>
        </ul>
    `,
    encapsulation: ViewEncapsulation.None
})
export class AppMegaMenuSub {

    @Input() model: any[];

    @Input() root: boolean = false;

    active = false;

    constructor(private appMegaMenu: AppMegaMenu) { }

    itemClick(event, item: MegaMenuItem) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }

        if (!item.url) {
            event.preventDefault();
        }

        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }

        this.appMegaMenu.hide();
    }

    ngOnDestroy() {
        this.active = false;
    }
}

@Component({
    selector: 'app-megaMenu',
    template: `
    <div #wrapper [ngClass]="'layout-megamenu-wrapper'" [ngStyle]="style" [class]="styleClass">
        <a class="layout-megamenu-button" style="cursor: pointer" (click)="onMegaMenuButtonClick($event)">
            MEGA MENU
            <i class="pi pi-chevron-down"></i>
        </a>

        <div *ngIf="visible" class="layout-megamenu-overlay" [@overlayAnimation]="{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}" (@overlayAnimation.start)="onOverlayAnimationStart($event)">
            <app-megaMenuSub [model]="model" [root]="true"></app-megaMenuSub>
        </div>
    </div>
    `,
    animations: [
        trigger('overlayAnimation', [
            transition(':enter', [
                style({display: 'flex'}),
                animate('{{showTransitionParams}}')
              ]),
              transition(':leave', [
                animate('{{hideTransitionParams}}', style({ display: 'none' }))
              ])
        ])
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AppMegaMenu implements OnDestroy {

    @Input() showTransitionOptions: string = '0ms';

    @Input() hideTransitionOptions: string = '0ms';

    @Input() model: MegaMenuItem[];

    @Input() style: any;

    @Input() styleClass: string;

    @ViewChild('wrapper') wrapperViewChild: ElementRef;

    visible: boolean;

    documentClickListener: any;

    constructor(private cd: ChangeDetectorRef, private el: ElementRef, public renderer: Renderer2) { }

    onMegaMenuButtonClick(event) {
        if (!this.visible)
            this.show();
        else
            this.hide();
    }

    show() {
        this.visible = true;
        this.cd.markForCheck();
    }

    hide() {
        this.visible = false;
        this.cd.markForCheck();
    }

    onOverlayAnimationStart(event: any) {
        switch(event.toState) {
            case 'visible':
                this.bindDocumentClickListener();
            break;

            case 'void':
                this.unbindDocumentClickListener();
            break;
        }
    }

    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            const documentTarget: any = this.el ? this.el.nativeElement.ownerDocument : 'document';

            this.documentClickListener = this.renderer.listen(documentTarget, 'click', (event) => {
                if (this.isOutsideClicked(event)) {
                    this.hide();
                }
            });
        }
    }

    isOutsideClicked(event: Event) {
        return !(this.wrapperViewChild.nativeElement.isSameNode(event.target) || this.wrapperViewChild.nativeElement.contains(event.target));
    }

    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    }

    ngOnDestroy() {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    }
}

@NgModule({
    imports: [CommonModule,RouterModule,RippleModule],
    exports: [AppMegaMenu, AppMegaMenuSub, AppMegaMenuItem, RouterModule],
    declarations: [AppMegaMenu,AppMegaMenuSub, AppMegaMenuItem]
})
export class AppMegaMenuModule { }
