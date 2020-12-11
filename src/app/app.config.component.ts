import {Component, OnInit} from '@angular/core';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-config',
    template: `
        <div id="layout-config" class="layout-config" [ngClass]="{'layout-config-active': appMain.configActive}" (click)="appMain.onConfigClick($event)">
            <a style="cursor: pointer" id="layout-config-button" class="layout-config-button" (click)="onConfigButtonClick($event)">
                <i class="pi pi-cog"></i>
            </a>
            <div class="layout-config-content">
                <div class="layout-config-form" id="config-form">
                    <div class="layout-config-header">
                        <h5>Theme Customization</h5>
                        <span>Ultima offers different themes for layout, topbar, menu etc.</span>
                    </div>

                    <div id="lightdark-panel" class="layout-config-section options">
                        <h6>Layout Mode</h6>
                        <div class="p-d-flex p-jc-between">
                            <div class="p-d-flex p-ai-center">
                                <p-radioButton name="layoutMode" value="light" [(ngModel)]="app.layoutMode" inputId="layoutMode1" (onClick)="onLayoutModeChange($event)"></p-radioButton>
                                <label for="layoutMode1" class="p-ml-2">Light</label>
                            </div>
                            <div class="p-d-flex p-ai-center">
                                <p-radioButton name="layoutMode" value="dark" [(ngModel)]="app.layoutMode" inputId="layoutMode2" (onClick)="onLayoutModeChange($event)"></p-radioButton>
                                <label for="layoutMode2" class="p-ml-2">Dark</label>
                            </div>
                        </div>
                    </div>

                    <div id="menumodes-panel" class="layout-config-section options">
                        <h6 class="p-mt-2">Menu Mode</h6>
                        <div class="p-d-flex p-jc-between">
                            <div class="p-d-flex p-ai-center">
                                <p-radioButton name="menuMode" value="static" [(ngModel)]="app.menuMode" inputId="menuMode1"></p-radioButton>
                                <label for="menuMode1" class="p-ml-2">Static</label>
                            </div>
                            <div class="p-d-flex p-ai-center">
                                <p-radioButton name="menuMode" value="overlay" [(ngModel)]="app.menuMode" inputId="menuMode2"></p-radioButton>
                                <label for="menuMode2" class="p-ml-2">Overlay</label>
                            </div>
                            <div class="p-d-flex p-ai-center">
                                <p-radioButton name="menuMode" value="horizontal" [(ngModel)]="app.menuMode" inputId="menuMode3"></p-radioButton>
                                <label for="menuMode3" class="p-ml-2">Horizontal</label>
                            </div>
                        </div>
                    </div>

                    <div id="outlined-panel" class="layout-config-section options">
                        <h6 class="p-mt-2">Input Background</h6>
                        <div class="p-d-flex p-jc-between">
                            <div class="p-d-flex p-ai-center">
                                <p-radioButton name="inputStyle" value="outlined" [(ngModel)]="app.inputStyle" inputId="inputStyle1"></p-radioButton>
                                <label for="inputStyle1" class="p-ml-2">Outlined</label>
                            </div>
                            <div class="p-d-flex p-ai-center">
                                <p-radioButton name="inputStyle" value="filled" [(ngModel)]="app.inputStyle" inputId="inputStyle2"></p-radioButton>
                                <label for="inputStyle2" class="p-ml-2">Filled</label>
                            </div>
                        </div>
                    </div>

                    <div id="ripple-panel" class="layout-config-section ripple">
                        <h6 class="p-mt-2">Ripple Effect</h6>
                        <p-inputSwitch [ngModel]="app.ripple" (onChange)="appMain.onRippleChange($event)"></p-inputSwitch>
                    </div>

                    <div id="orientation-panel" class="layout-config-section dark">
                        <h6 class="p-mt-2">RTL</h6>
                        <p-inputSwitch [ngModel]="app.isRTL" (onChange)="appMain.onRTLChange($event)"></p-inputSwitch>
                    </div>

                    <div id="componentthemes-panel" class="layout-config-section colors">
                        <h6 class="p-mt-2">Layout Themes</h6>
                        <div class="p-grid layout-config-colors">
                            <div *ngFor="let l of layoutThemes" class="p-col p-col-fixed">
                                <a style="cursor: pointer" (click)="changeLayoutTheme(l.name)" class="layout-config-option">
                                    <span class="layout-config-option-color" [ngStyle]="{'background-color': l.color}"></span>
                                    <span class="layout-config-option-check-mask" *ngIf="layoutTheme === l.name">
                                        <i class="pi pi-check"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div id="menuthemes-panel" class="layout-config-section colors">
                        <h6 class="p-mt-2">Menu Themes</h6>
                        <div class="p-grid layout-config-colors">
                            <div *ngFor="let t of menuThemes" class="p-col p-col-fixed">
                                <a style="cursor: pointer" (click)="changeMenuTheme(t.name)" class="layout-config-option">
                                    <span class="layout-config-option-color" [ngStyle]="{'background-color': t.color}"></span>
                                    <span class="layout-config-option-check-mask" *ngIf="app.menuTheme === t.name">
                                        <i class="pi pi-check"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div id="componentthemes-panel" class="layout-config-section colors">
                        <h6 class="p-mt-2">Topbar Themes</h6>
                        <div class="p-grid layout-config-colors">
                            <div *ngFor="let t of topbarThemes" class="p-col p-col-fixed">
                                <a style="cursor: pointer" (click)="changeTopbarTheme(t.name)" class="layout-config-option">
                                    <span class="layout-config-option-color" [ngStyle]="{'background-color': t.color}"></span>
                                    <span class="layout-config-option-check-mask" *ngIf="app.topbarTheme === t.name">
                                        <i class="pi pi-check"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div id="componentthemes-panel" class="layout-config-section colors">
                        <h6 class="p-mt-2">Component Themes</h6>
                        <div class="p-grid layout-config-colors">
                            <div *ngFor="let t of themes" class="p-col p-col-fixed">
                                <a style="cursor: pointer" (click)="changeTheme(t.name)" class="layout-config-option">
                                    <span class="layout-config-option-color" [ngStyle]="{'background-color': t.color}"></span>
                                    <span class="layout-config-option-check-mask" *ngIf="theme === t.name">
                                        <i class="pi pi-check"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class AppConfigComponent implements OnInit {

    themes: any[];

    layoutThemes: any[];

    menuThemes: any[];

    topbarThemes: any[];

    theme = 'deeppurple';

    layoutTheme = 'blue';

    constructor(public appMain: AppMainComponent, public app: AppComponent) {}

    ngOnInit() {
        this.themes = [
            {name: 'indigo', color: '#2f8ee5'},
            {name: 'deeppurple', color: '#30A059'},
            {name: 'red', color: 'red'}
        ];

        this.layoutThemes = [
            {name: 'blue', color: '#2c84d8'},
            {name: 'pink', color: '#E91E63'},
            {name: 'purple', color: '#9C27B0'},
            {name: 'deeppurple', color: '#673AB7'},
            {name: 'indigo', color: '#3F51B5'},
            {name: 'lightblue', color: '#03A9F4'},
            {name: 'cyan', color: '#00BCD4'},
            {name: 'teal', color: '#009688'},
            {name: 'green', color: '#4CAF50'},
            {name: 'lightgreen', color: '#8BC34A'},
            {name: 'lime', color: '#CDDC39'},
            {name: 'orange', color: '#FB8C00'},
            {name: 'deeporange', color: '#F4511E'},
            {name: 'brown', color: '#795548'},
            {name: 'bluegrey', color: '#607D8B'}
        ];

        this.menuThemes = [
            {name: 'light', color: '#FDFEFF'},
            {name: 'dark', color: '#434B54'},
            {name: 'indigo', color: '#1A237E'},
            {name: 'bluegrey', color: '#37474F'},
            {name: 'brown', color: '#4E342E'},
            {name: 'cyan', color: '#006064'},
            {name: 'green', color: '#2E7D32'},
            {name: 'deeppurple', color: '#4527A0'},
            {name: 'deeporange', color: '#BF360C'},
            {name: 'pink', color: '#880E4F'},
            {name: 'purple', color: '#6A1B9A'},
            {name: 'teal', color: '#00695C'},
            {name: 'darker', color: '#212121'}
        ];

        this.topbarThemes = [
            {name: 'lightblue', color: '#2E88FF'},
            {name: 'white', color: '#FDFEFF'},
            {name: 'blue', color: '#1565C0'},
            {name: 'deeppurple', color: '#4527A0'},
            {name: 'purple', color: '#6A1B9A'},
            {name: 'pink', color: '#AD1457'},
            {name: 'cyan', color: '#0097A7'},
            {name: 'teal', color: '#00796B'},
            {name: 'green', color: '#43A047'},
            {name: 'lightgreen', color: '#689F38'},
            {name: 'lime', color: '#AFB42B'},
            {name: 'yellow', color: '#FBC02D'},
            {name: 'amber', color: '#FFA000'},
            {name: 'orange', color: '#FB8C00'},
            {name: 'deeporange', color: '#D84315'},
            {name: 'brown', color: '#5D4037'},
            {name: 'grey', color: '#616161'},
            {name: 'bluegrey', color: '#546E7A'}
        ];
    }

    onLayoutModeChange(event) {
        //this.app.menuTheme = this.app.layoutMode;
        //this.app.topbarTheme = this.app.layoutMode;

        const layoutLink: HTMLLinkElement = document.getElementById('layout-css') as HTMLLinkElement;
        const layoutHref = 'assets/layout/css/layout-' + this.layoutTheme + '-' + this.app.layoutMode + '.css';
        this.replaceLink(layoutLink, layoutHref);

        const themeLink = document.getElementById('theme-css');
        const urlTokens = themeLink.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 1] = 'theme-' + this.app.layoutMode + '.css';
        const newURL = urlTokens.join('/');

        this.replaceLink(themeLink, newURL, this.appMain['refreshTrafficChart']);
    }

    changeTheme(theme) {
        this.theme = theme;

        const themeLink: HTMLLinkElement = document.getElementById('theme-css') as HTMLLinkElement;
        const themeHref = 'assets/theme/' + theme + '/theme-' + this.app.layoutMode + '.css';
        this.replaceLink(themeLink, themeHref, this.appMain['refreshTrafficChart']);
    }

    changeLayoutTheme(theme) {
        this.layoutTheme = theme;

        const layoutLink: HTMLLinkElement = document.getElementById('layout-css') as HTMLLinkElement;
        const layoutHref = 'assets/layout/css/layout-' + this.layoutTheme + '-' + this.app.layoutMode + '.css';
        this.replaceLink(layoutLink, layoutHref, this.appMain['refreshTrafficChart']);
    }

    changeMenuTheme(theme) {
        this.app.menuTheme = theme;
    }

    changeTopbarTheme(theme) {
        this.app.topbarTheme = theme;
    }

    isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    }

    replaceLink(linkElement, href, callback?) {
        if (this.isIE()) {
            linkElement.setAttribute('href', href);
            if (callback) {
                callback();
            }
        } else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);

                if (callback) {
                    callback();
                }
            });
        }
    }

    onConfigButtonClick(event) {
        this.appMain.configActive = !this.appMain.configActive;
        this.appMain.configClick = true;
        event.preventDefault();
    }
}
