import {Component,Input,OnInit,EventEmitter,ViewChild,trigger,state,transition,style,animate,Inject,forwardRef} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/primeng';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-menu',
    template: `
        <ul app-submenu [item]="model" root="true" class="ultima-menu clearfix" [reset]="reset"></ul>
    `
})
export class AppMenuComponent implements OnInit {

    @Input() reset: boolean;

    model: MenuItem[];

    constructor(@Inject(forwardRef(() => AppComponent)) public app:AppComponent) {}
    
    ngOnInit() {
        this.model = [
            {label: 'Dashboard', icon: 'dashboard', routerLink: ['/']},
            {
                label: 'Themes', icon: 'palette',
                items: [
                    {label: 'Indigo - Pink', icon: 'brush', command: (event) => {this.changeTheme(event, 'indigo')}},
                    {label: 'Brown - Green', icon: 'brush', command: (event) => {this.changeTheme(event, 'brown')}},
                    {label: 'Blue - Amber', icon: 'brush', command: (event) => {this.changeTheme(event, 'blue')}},
                    {label: 'Blue Grey - Green', icon: 'brush', command: (event) => {this.changeTheme(event, 'blue-grey')}},
                    {label: 'Dark - Blue', icon: 'brush', command: (event) => {this.changeTheme(event, 'dark-blue')}},
                    {label: 'Dark - Green', icon: 'brush', command: (event) => {this.changeTheme(event, 'dark-green')}},
                    {label: 'Green - Yellow', icon: 'brush', command: (event) => {this.changeTheme(event, 'green')}},
                    {label: 'Purple - Cyan', icon: 'brush', command: (event) => {this.changeTheme(event, 'purple-cyan')}},
                    {label: 'Purple - Amber', icon: 'brush', command: (event) => {this.changeTheme(event, 'purple-amber')}},
                    {label: 'Teal - Lime', icon: 'brush', command: (event) => {this.changeTheme(event, 'teal')}},
                    {label: 'Cyan - Amber', icon: 'brush', command: (event) => {this.changeTheme(event, 'cyan')}},
                    {label: 'Grey - Deep Orange', icon: 'brush', command: (event) => {this.changeTheme(event, 'grey')}}
                ]
            },
            {
                label: 'Customization', icon: 'settings_application',
                items: [
                    {label: 'Compact Size', icon: 'fiber_manual_record', command: () => this.app.layoutCompact = true},
                    {label: 'Compact Size', icon: 'fiber_smart_record',  command: () => this.app.layoutCompact = false},
                    {label: 'Static Menu', icon: 'menu',  command: () => this.app.changeToStaticMenu()},
                    {label: 'Overlay Menu', icon: 'exit_to_app',  command: () => this.app.changeToOverlayMenu()},
                    {label: 'Horizontal Menu', icon: 'border_horizontal',  command: () => this.app.changeToHorizontalMenu()},
                    {label: 'Light Menu', icon: 'label_outline',  command: () => this.app.darkMenu = false},
                    {label: 'Dark Menu', icon: 'label',  command: () => this.app.darkMenu = true},
                    {label: 'Inline Profile', icon: 'contacts',  command: () => this.app.profileMode = 'inline'},
                    {label: 'Top Profile', icon: 'person_pin',  command: () => this.app.profileMode = 'top'},
                ]
            },
            {
                label: 'Components', icon: 'list',
                items: [
                    {label: 'Sample Page', icon: 'desktop_mac', routerLink: ['/sample']},
                    {label: 'Forms', icon: 'input', routerLink: ['/forms']},
                    {label: 'Data', icon: 'grid_on', routerLink: ['/data']},
                    {label: 'Panels', icon: 'content_paste', routerLink: ['/panels']},
                    {label: 'Overlays', icon: 'content_copy', routerLink: ['/overlays']},
                    {label: 'Menus', icon: 'menu', routerLink: ['/menus']},
                    {label: 'Messages', icon: 'message', routerLink: ['/messages']},
                    {label: 'Charts', icon: 'insert_chart', routerLink: ['/charts']},
                    {label: 'File', icon: 'attach_file', routerLink: ['/file']},
                    {label: 'Misc', icon: 'toys', routerLink: ['/misc']}
                ]
            },
            {
                label: 'Template Pages', icon: 'get_app',
                items: [
                    {label: 'Empty Page', icon: 'hourglass_empty', routerLink: ['/empty']},
                    {label: 'Landing Page', icon: 'flight_land', routerLink: ['/empty']},
                    {label: 'Login Page', icon: 'verified_user', url: 'login.html'},
                    {label: 'Error Page', icon: 'error', url: 'error.html'},
                    {label: '404 Page', icon: 'error_outline', url: '404.html'},
                    {label: 'Access Denied Page', icon: 'security', url: 'access.html'}
                ]
            },
            {
                label: 'Menu Hierarchy', icon: 'menu',
                items: [
                    {
                        label: 'Submenu 1', icon: 'subject',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'subject',
                                items: [
                                    {label: 'Submenu 1.1.1', icon: 'subject'},
                                    {label: 'Submenu 1.1.2', icon: 'subject'},
                                    {label: 'Submenu 1.1.3', icon: 'subject'},
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'subject',
                                items: [
                                    {label: 'Submenu 1.2.1', icon: 'subject'},
                                    {label: 'Submenu 1.2.2', icon: 'subject'}
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'subject',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'subject',
                                items: [
                                    {label: 'Submenu 2.1.1', icon: 'subject'},
                                    {label: 'Submenu 2.1.2', icon: 'subject'},
                                    {label: 'Submenu 2.1.3', icon: 'subject'},
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'subject',
                                items: [
                                    {label: 'Submenu 2.2.1', icon: 'subject'},
                                    {label: 'Submenu 2.2.2', icon: 'subject'}
                                ]
                            },
                        ]
                    }
                ]
            },
            {label: 'Utils', icon: 'build', routerLink: ['/utils']},
            {label: 'Documentation', icon: 'find_in_page', routerLink: ['/documentation']}
        ];
    }

    changeTheme(event, theme) {
        let themeLink: HTMLLinkElement = <HTMLLinkElement> document.getElementById('theme-css');
        let layoutLink: HTMLLinkElement = <HTMLLinkElement> document.getElementById('layout-css');
        
        themeLink.href = 'assets/theme/theme-' + theme +'.css';
        layoutLink.href = 'assets/layout/css/layout-' + theme +'.css';
        event.preventDefault();
    }
}

@Component({
    selector: '[app-submenu]',
    template: `
        <template ngFor let-child let-i="index" [ngForOf]="(root ? item : item.items)">
            <li [ngClass]="{'active-menuitem': isActive(i)}">
                <a [href]="child.url||'#'" (click)="itemClick($event,child,i)">
                    <i class="material-icons">{{child.icon}}</i>
                    <span>{{child.label}}</span>
                    <i class="material-icons" *ngIf="child.items">keyboard_arrow_down</i>
                </a>
                <ul app-submenu [item]="child" *ngIf="child.items" [@children]="isActive(i) ? 'visible' : 'hidden'"></ul>
            </li>
        </template>
    `,
    animations: [
        trigger('children', [
            state('hidden', style({
                height: '0px'
            })),
            state('visible', style({
                height: '*'
            })),
            transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppSubMenu {

    @Input() item: MenuItem;
    
    @Input() root: boolean;

    _reset: boolean;
        
    activeIndex: number;

    constructor(@Inject(forwardRef(() => AppComponent)) public app:AppComponent, public router: Router, public location: Location) {}
        
    itemClick(event: Event, item: MenuItem, index: number) {
        if(item.disabled) {
            event.preventDefault();
            return true;
        }
        
        this.activeIndex = (this.activeIndex === index) ? null : index;
        
        if(!item.url||item.routerLink) {
            event.preventDefault();
        }
        
        if(item.command) {
            if(!item.eventEmitter) {
                item.eventEmitter = new EventEmitter();
                item.eventEmitter.subscribe(item.command);
            }
            
            item.eventEmitter.emit({
                originalEvent: event,
                item: item
            });
        }

        if(item.routerLink) {
            this.router.navigate(item.routerLink);
        }
    }
    
    isActive(index: number): boolean {
        return this.activeIndex === index;
    }

    @Input() get reset(): boolean {
        return this._reset;
    }

    set reset(val:boolean) {
        this._reset = val;

        if(this._reset && this.app.isHorizontal()) {
            this.activeIndex = null;
        }
    }
}