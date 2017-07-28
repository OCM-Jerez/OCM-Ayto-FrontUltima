import {Component,Input,OnInit,EventEmitter,ViewChild,trigger,state,transition,style,animate,Inject,forwardRef,Renderer} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/primeng';
import {AppComponent} from './app.component';

@Component({
    selector: 'inline-profile',
    template: `
        <div class="profile" (click)="app.isSlim() ? onClick($event) : null" [ngClass]="{'profile-expanded':active}">
            <div class="profile-image"></div>
            <a href="#" (click)="onClick($event)">
                <span class="profile-name">Jane Williams</span>
                <i class="material-icons">keyboard_arrow_down</i>
            </a>
        </div>

        <ul class="ultima-menu profile-menu" [@menu]="active ? (app.isSlim() ? 'show' : 'visible') : (app.isSlim() ? 'hide' : 'hidden')">
            <li role="menuitem">
                <a href="#" class="ripplelink" [attr.tabindex]="!active ? '-1' : null">
                    <i class="material-icons">person</i>
                    <span>Profile</span>
                </a>
            </li>
            <li role="menuitem">
                <a href="#" class="ripplelink" [attr.tabindex]="!active ? '-1' : null">
                    <i class="material-icons">security</i>
                    <span>Privacy</span>
                </a>
            </li>
            <li role="menuitem">
                <a href="#" class="ripplelink" [attr.tabindex]="!active ? '-1' : null">
                    <i class="material-icons">settings_application</i>
                    <span>Settings</span>
                </a>
            </li>
            <li role="menuitem">
                <a href="#" class="ripplelink" [attr.tabindex]="!active ? '-1' : null">
                    <i class="material-icons">power_settings_new</i>
                    <span>Logout</span>
                </a>
            </li>
        </ul>
    `,
    animations: [
        trigger('menu', [
            state('hidden', style({
                height: '0px'
            })),
            state('visible', style({
                height: '*'
            })),
            state('hide', style({
                height: '0px'
            })),
            state('show', style({
                height: '*'
            })),
            transition('show => hide', animate('0ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hide => show', animate('0ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class InlineProfileComponent {
    
    documentClickListener: Function;
    
    profileClick: boolean;
    
    constructor(@Inject(forwardRef(() => AppComponent)) public app:AppComponent,public renderer: Renderer) {}
    
    ngAfterViewInit() {
        this.documentClickListener = this.renderer.listenGlobal('body', 'click', (event) => { 
            if(!this.profileClick && this.app.isSlim()) {
                this.active = false;
            }
            
            this.profileClick = false;
        });
    }

    active: boolean;

    onClick(event) {
        if(this.app.isSlim()) {
            this.profileClick = true;
        }
        this.active = !this.active;
        event.preventDefault();
    }
}