import {Component, OnInit} from '@angular/core';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-config',
    template: `
        <p-sidebar [(visible)]="configActive" position="right" [blockScroll]="true" [showCloseIcon]="false" [baseZIndex]="1000" styleClass="layout-config p-sidebar-sm fs-small p-p-0">
            <div class="layout-config-panel p-d-flex p-flex-column">
                <div class="p-px-3 p-pt-3">
                    <h5>Theme Customization</h5>
                    <span>Ultima offers different themes for layout, topbar, menu etc.</span>
                </div>

                <hr class="p-mb-0" />

                <div class="layout-config-options p-p-3">
                    <h6>Layout Mode</h6>
                    <div class="p-d-flex">
                        <div class="p-d-flex p-ai-center">
                            <p-radioButton name="layoutMode" value="light" [(ngModel)]="app.layoutMode" inputId="layoutMode1" (onClick)="onLayoutModeChange($event, 'light')"></p-radioButton>
                            <label for="layoutMode1" class="p-ml-2">Light</label>
                        </div>
                        <div class="p-d-flex p-ai-center p-ml-4">
                            <p-radioButton name="layoutMode" value="dark" [(ngModel)]="app.layoutMode" inputId="layoutMode2" (onClick)="onLayoutModeChange($event, 'dark')"></p-radioButton>
                            <label for="layoutMode2" class="p-ml-2">Dark</label>
                        </div>
                    </div>

                    <h6>Menu Mode</h6>
                    <div class="p-d-flex">
                        <div class="p-d-flex p-flex-column">
                            <div class="p-d-flex p-ai-center">
                                <p-radioButton name="menuMode" value="static" [(ngModel)]="app.menuMode" inputId="menuMode1"></p-radioButton>
                                <label for="menuMode1" class="p-ml-2">Static</label>
                            </div>
                            <div class="p-d-flex p-ai-center p-mt-3">
                                <p-radioButton name="menuMode" value="horizontal" [(ngModel)]="app.menuMode" inputId="menuMode2"></p-radioButton>
                                <label for="menuMode2" class="p-ml-2">Horizontal</label>
                            </div>
                        </div>
                        <div class="p-d-flex p-flex-column p-ml-4">
                            <div class="p-d-flex p-ai-center">
                                <p-radioButton name="menuMode" value="overlay" [(ngModel)]="app.menuMode" inputId="menuMode4"></p-radioButton>
                                <label for="menuMode4" class="p-ml-2">Overlay</label>
                            </div>
                            <div class="p-d-flex p-ai-center p-mt-3">
                                <p-radioButton name="menuMode" value="slim" [(ngModel)]="app.menuMode" inputId="menuMode3"></p-radioButton>
                                <label for="menuMode3" class="p-ml-2">Slim</label>
                            </div>
                        </div>
                    </div>

                    <h6>Inline Menu Position</h6>
                    <div class="p-d-flex">
                        <div class="p-d-flex p-ai-center">
                            <p-radioButton name="inlineMenuPosition" value="top" [(ngModel)]="app.inlineMenuPosition" inputId="inlineMenuPosition1"></p-radioButton>
                            <label for="inlineMenuPosition1" class="p-ml-2">Top</label>
                        </div>
                        <div class="p-d-flex p-ai-center p-ml-4">
                            <p-radioButton name="inlineMenuPosition" value="bottom" [(ngModel)]="app.inlineMenuPosition" inputId="inlineMenuPosition2"></p-radioButton>
                            <label for="inlineMenuPosition2" class="p-ml-2">Bottom</label>
                        </div>
                        <div class="p-d-flex p-ai-center p-ml-4">
                            <p-radioButton name="inlineMenuPosition" value="both" [(ngModel)]="app.inlineMenuPosition" inputId="inlineMenuPosition3"></p-radioButton>
                            <label for="inlineMenuPosition3" class="p-ml-2">Both</label>
                        </div>
                    </div>

                    <h6>Input Background</h6>
                    <div class="p-d-flex">
                        <div class="p-d-flex p-ai-center">
                            <p-radioButton name="inputStyle" value="outlined" [(ngModel)]="app.inputStyle" inputId="inputStyle1"></p-radioButton>
                            <label for="inputStyle1" class="p-ml-2">Outlined</label>
                        </div>
                        <div class="p-d-flex p-ai-center p-ml-4">
                            <p-radioButton name="inputStyle" value="filled" [(ngModel)]="app.inputStyle" inputId="inputStyle2"></p-radioButton>
                            <label for="inputStyle2" class="p-ml-2">Filled</label>
                        </div>
                    </div>

                    <h6>Ripple Effect</h6>
                    <p-inputSwitch [ngModel]="app.ripple" (onChange)="appMain.onRippleChange($event)"></p-inputSwitch>

                    <h6>RTL</h6>
                    <p-inputSwitch [ngModel]="app.isRTL" (onChange)="appMain.onRTLChange($event)"></p-inputSwitch>

                    <h6>Menu Themes</h6>
                    <div *ngIf="app.layoutMode!=='dark'" class="p-grid">
                        <div *ngFor="let t of menuThemes" class="p-col p-col-fixed">
                            <a style="cursor: pointer" (click)="changeMenuTheme(t.name)" class="layout-config-color-option" [title]="t.name">
                                <span class="color" [ngStyle]="{'background-color': t.color}"></span>
                                <span class="check p-d-flex p-ai-center p-jc-center" *ngIf="app.menuTheme === t.name">
                                    <i class="pi pi-check" style="color: var(--menu-text-color)"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <p *ngIf="app.layoutMode==='dark'">Menu themes are only available in light mode by design as large surfaces can emit too much brightness in dark mode.</p>

                    <h6>Topbar Themes</h6>
                    <div *ngIf="app.layoutMode!=='dark'" class="p-grid">
                        <div *ngFor="let t of topbarThemes" class="p-col p-col-fixed">
                            <a style="cursor: pointer" (click)="changeTopbarTheme(t.name)" class="layout-config-color-option" [title]="t.name">
                                <span class="color" [ngStyle]="{'background-color': t.color}"></span>
                                <span class="check p-d-flex p-ai-center p-jc-center" *ngIf="app.topbarTheme === t.name">
                                    <i class="pi pi-check" style="color: var(--topbar-text-color)"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <p *ngIf="app.layoutMode==='dark'">Topbar themes are only available in light mode by design as large surfaces can emit too much brightness in dark mode.</p>

                    <h6>Component Themes</h6>
                    <div class="p-grid">
                        <div *ngFor="let t of themes" class="p-col p-col-fixed">
                            <a style="cursor: pointer" (click)="changeTheme(t.name)" class="layout-config-color-option">
                                <span class="color" [ngStyle]="{'background-color': t.color}"></span>
                                <span class="check p-d-flex p-ai-center p-jc-center" *ngIf="theme === t.name">
                                    <i class="pi pi-check" style="color: var(--primary-color-text)"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </p-sidebar>

        <p-button type="button" (click)="configActive = true" icon="pi pi-cog" *ngIf="!configActive" styleClass="layout-config-button"></p-button>
    `
})
export class AppConfigComponent implements OnInit {

    themes: any[];

    menuThemes: any[];

    menuTheme = 'light';

    topbarThemes: any[];

    topbarTheme = 'blue';

    theme = 'blue';

    configActive = false;

    constructor(public appMain: AppMainComponent, public app: AppComponent) {}

    ngOnInit() {
        this.themes = [
            {name: 'indigo', color: '#2f8ee5'},
            {name: 'pink', color: '#E91E63'},
            {name: 'purple', color: '#9C27B0'},
            {name: 'deeppurple', color: '#673AB7'},
            {name: 'blue', color: '#2196F3'},
            {name: 'lightblue', color: '#03A9F4'},
            {name: 'cyan', color: '#00BCD4'},
            {name: 'teal', color: '#009688'},
            {name: 'green', color: '#4CAF50'},
            {name: 'lightgreen', color: '#8BC34A'},
            {name: 'lime', color: '#CDDC39'},
            {name: 'yellow', color: '#FFEB3B'},
            {name: 'amber', color: '#FFC107'},
            {name: 'orange', color: '#FF9800'},
            {name: 'deeporange', color: '#FF5722'},
            {name: 'brown', color: '#795548'},
            {name: 'bluegrey', color: '#607D8B'}
        ];

        this.menuThemes = [
            {name: 'light', color: '#FDFEFF', topbarTheme: 'white'},
            {name: 'dark', color: '#434B54', topbarTheme: 'dark'},
            {name: 'indigo', color: '#1A237E', topbarTheme: 'indigo'},
            {name: 'bluegrey', color: '#37474F', topbarTheme: 'bluegrey'},
            {name: 'brown', color: '#4E342E', topbarTheme: 'brown'},
            {name: 'cyan', color: '#006064', topbarTheme: 'cyan'},
            {name: 'green', color: '#2E7D32', topbarTheme: 'green'},
            {name: 'deeppurple', color: '#4527A0', topbarTheme: 'deeppurple'},
            {name: 'deeporange', color: '#BF360C', topbarTheme: 'deeporange'},
            {name: 'pink', color: '#880E4F', topbarTheme: 'pink'},
            {name: 'purple', color: '#6A1B9A', topbarTheme: 'purple'},
            {name: 'teal', color: '#00695C', topbarTheme: 'teal'},
            {name: 'darker', color: '#212121', topbarTheme: 'dark'}
        ];

        this.topbarThemes = [
            {name: 'lightblue', color: '#2E88FF', menuTheme:'light'},
            {name: 'dark', color: '#363636', menuTheme:'dark'},
            {name: 'white', color: '#FDFEFF', menuTheme:'light'},
            {name: 'blue', color: '#1565C0', menuTheme:'dark'},
            {name: 'deeppurple', color: '#4527A0', menuTheme:'deeppurple'},
            {name: 'purple', color: '#6A1B9A', menuTheme:'purple'},
            {name: 'pink', color: '#AD1457', menuTheme:'pink'},
            {name: 'cyan', color: '#0097A7', menuTheme:'cyan'},
            {name: 'teal', color: '#00796B', menuTheme:'teal'},
            {name: 'green', color: '#43A047', menuTheme:'green'},
            {name: 'lightgreen', color: '#689F38', menuTheme:'green'},
            {name: 'lime', color: '#AFB42B', menuTheme:'light'},
            {name: 'yellow', color: '#FBC02D', menuTheme:'light'},
            {name: 'amber', color: '#FFA000', menuTheme:'light'},
            {name: 'orange', color: '#FB8C00', menuTheme:'dark'},
            {name: 'deeporange', color: '#D84315', menuTheme:'deeporange'},
            {name: 'brown', color: '#5D4037', menuTheme:'brown'},
            {name: 'grey', color: '#616161', menuTheme:'light'},
            {name: 'bluegrey', color: '#546E7A', menuTheme:'bluegrey'},
            {name: 'indigo', color: '#3F51B5', menuTheme:'indigo'}
        ];
    }

    onLayoutModeChange(event, mode) {
        this.app.layoutMode = mode;

        if (mode === 'dark') {
            this.app.menuTheme = 'dark';
            this.app.topbarTheme = 'dark';
        }
        else {
            this.app.menuTheme = 'light';
            this.app.topbarTheme = 'blue';
        }

        const layoutLink: HTMLLinkElement = document.getElementById('layout-css') as HTMLLinkElement;
        const layoutHref = 'assets/layout/css/layout-' + this.app.layoutMode + '.css';
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
}
