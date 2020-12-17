import { Component } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { AppMainComponent } from './app.main.component';
import { AppComponent } from './app.component';

@Component({
    selector: 'app-inline-profile',
    templateUrl: './app.inlineprofile.component.html',
    animations: [
        trigger('menu', [
            state('hiddenAnimated', style({
                height: '0px',
                paddingBottom: '0px',
                overflow: 'hidden'
            })),
            state('visibleAnimated', style({
                height: '*',
                overflow: 'visible'
            })),
            state('visible', style({
                height: '*',
                'z-index': 100
            })),
            state('hidden', style({
                height: '0px',
                'z-index': '*'
            })),
            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppInlineProfileComponent {

    active: boolean;

    constructor(public appMain: AppMainComponent, public app: AppComponent) { }

    onClick(event) {
        this.appMain.onInlineMenuClick(event);
        event.preventDefault();
    }

    get tabIndex() {
        return !this.appMain.inlineMenuActive  ? '-1' : null;
    }
}
