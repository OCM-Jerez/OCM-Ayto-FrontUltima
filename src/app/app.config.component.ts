import {Component, OnInit, ViewChild} from '@angular/core';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-config',
    template: `
        <p-sidebar #sidebar [(visible)]="configActive" [position]="app.isRTL ? 'left' : 'right'" [blockScroll]="true" [showCloseIcon]="false" [baseZIndex]="1000" styleClass="layout-config p-sidebar-sm fs-small p-p-0">
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
                            <label for="layoutMode1" [ngClass]="{'p-ml-2': !app.isRTL, 'p-mr-2': app.isRTL}">Light</label>
                        </div>
                        <div class="p-d-flex p-ai-center" [ngClass]="{'p-ml-4': !app.isRTL, 'p-mr-4': app.isRTL}">
                            <p-radioButton name="layoutMode" value="dark" [(ngModel)]="app.layoutMode" inputId="layoutMode2" (onClick)="onLayoutModeChange($event, 'dark')"></p-radioButton>
                            <label for="layoutMode2" [ngClass]="{'p-ml-2': !app.isRTL, 'p-mr-2': app.isRTL}">Dark</label>
                        </div>
                    </div>

                    <h6>Menu Mode</h6>
                    <div class="p-d-flex">
                        <div class="p-d-flex p-flex-column">
                            <div class="p-d-flex p-ai-center">
                                <p-radioButton name="menuMode" value="static" [(ngModel)]="app.menuMode" inputId="menuMode1"></p-radioButton>
                                <label for="menuMode1" [ngClass]="{'p-ml-2': !app.isRTL, 'p-mr-2': app.isRTL}">Static</label>
                            </div>
                            <div class="p-d-flex p-ai-center p-mt-3">
                                <p-radioButton name="menuMode" value="horizontal" [(ngModel)]="app.menuMode" inputId="menuMode2"></p-radioButton>
                                <label for="menuMode2" [ngClass]="{'p-ml-2': !app.isRTL, 'p-mr-2': app.isRTL}">Horizontal</label>
                            </div>
                        </div>
                        <div class="p-d-flex p-flex-column" [ngClass]="{'p-ml-4': !app.isRTL, 'p-mr-4': app.isRTL}">
                            <div class="p-d-flex p-ai-center">
                                <p-radioButton name="menuMode" value="overlay" [(ngModel)]="app.menuMode" inputId="menuMode4"></p-radioButton>
                                <label for="menuMode4" [ngClass]="{'p-ml-2': !app.isRTL, 'p-mr-2': app.isRTL}">Overlay</label>
                            </div>
                            <div class="p-d-flex p-ai-center p-mt-3">
                                <p-radioButton name="menuMode" value="slim" [(ngModel)]="app.menuMode" inputId="menuMode3"></p-radioButton>
                                <label for="menuMode3" [ngClass]="{'p-ml-2': !app.isRTL, 'p-mr-2': app.isRTL}">Slim</label>
                            </div>
                        </div>
                    </div>

                    <h6>Inline Menu Position</h6>
                    <div class="p-d-flex">
                        <div class="p-d-flex p-ai-center">
                            <p-radioButton name="inlineMenuPosition" value="top" [(ngModel)]="app.inlineMenuPosition" inputId="inlineMenuPosition1"></p-radioButton>
                            <label for="inlineMenuPosition1" [ngClass]="{'p-ml-2': !app.isRTL, 'p-mr-2': app.isRTL}">Top</label>
                        </div>
                        <div class="p-d-flex p-ai-center" [ngClass]="{'p-ml-4': !app.isRTL, 'p-mr-4': app.isRTL}">
                            <p-radioButton name="inlineMenuPosition" value="bottom" [(ngModel)]="app.inlineMenuPosition" inputId="inlineMenuPosition2"></p-radioButton>
                            <label for="inlineMenuPosition2" [ngClass]="{'p-ml-2': !app.isRTL, 'p-mr-2': app.isRTL}">Bottom</label>
                        </div>
                        <div class="p-d-flex p-ai-center" [ngClass]="{'p-ml-4': !app.isRTL, 'p-mr-4': app.isRTL}">
                            <p-radioButton name="inlineMenuPosition" value="both" [(ngModel)]="app.inlineMenuPosition" inputId="inlineMenuPosition3"></p-radioButton>
                            <label for="inlineMenuPosition3" [ngClass]="{'p-ml-2': !app.isRTL, 'p-mr-2': app.isRTL}">Both</label>
                        </div>
                    </div>

                    <h6>Input Background</h6>
                    <div class="p-d-flex">
                        <div class="p-d-flex p-ai-center">
                            <p-radioButton name="inputStyle" value="outlined" [(ngModel)]="app.inputStyle" inputId="inputStyle1"></p-radioButton>
                            <label for="inputStyle1" [ngClass]="{'p-ml-2': !app.isRTL, 'p-mr-2': app.isRTL}">Outlined</label>
                        </div>
                        <div class="p-d-flex p-ai-center" [ngClass]="{'p-ml-4': !app.isRTL, 'p-mr-4': app.isRTL}">
                            <p-radioButton name="inputStyle" value="filled" [(ngModel)]="app.inputStyle" inputId="inputStyle2"></p-radioButton>
                            <label for="inputStyle2" [ngClass]="{'p-ml-2': !app.isRTL, 'p-mr-2': app.isRTL}">Filled</label>
                        </div>
                    </div>

                    <h6>Ripple Effect</h6>
                    <p-inputSwitch [ngModel]="app.ripple" (onChange)="appMain.onRippleChange($event)"></p-inputSwitch>

                    <h6>RTL</h6>
                    <p-inputSwitch [ngModel]="app.isRTL" (onChange)="appMain.onRTLChange($event)" styleClass="p-d-block"></p-inputSwitch>

                    <h6 class="p-d-inline-block" [ngClass]="{'p-mr-3': !app.isRTL, 'p-ml-3': app.isRTL}">Menu Themes</h6>
                    <span *ngIf="app.layoutMode!=='dark'" #menuSwitchContainer style="position: relative">
                        <p-inputSwitch [appendTo]="menuSwitchContainer" [(ngModel)]="matchingTopbarTheme" (onChange)="onMatchingTopbarThemeChange($event)"
                            pTooltip="Show matching Topbar Themes" tooltipPosition="bottom"></p-inputSwitch>
                    </span>
                    <div *ngIf="app.layoutMode!=='dark'" class="p-grid">
                        <div *ngFor="let t of menuThemes" class="p-col p-col-fixed">
                            <a style="cursor: pointer" (click)="changeMenuTheme(t)" [ngClass]="{'layout-config-color-option': true, 'p-disabled': isDisabled(filteredMenuThemes, t)}" [title]="t.name">
                                <span class="color" [ngStyle]="{'background-color': t.color}"></span>
                                <span class="check p-d-flex p-ai-center p-jc-center" *ngIf="app.menuTheme === t.name">
                                    <i class="pi pi-check" style="color: var(--menu-text-color)"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <p *ngIf="app.layoutMode==='dark'">Menu themes are only available in light mode by design as large surfaces can emit too much brightness in dark mode.</p>

                    <h6 class="p-d-inline-block" [ngClass]="{'p-mr-3': !app.isRTL, 'p-ml-3': app.isRTL}">Topbar Themes</h6>
                    <span *ngIf="app.layoutMode!=='dark'" #topbarSwitchContainer style="position: relative">
                        <p-inputSwitch [appendTo]="topbarSwitchContainer" [(ngModel)]="matchingMenuTheme" (onChange)="onMatchingMenuThemeChange($event)"
                            pTooltip="Show matching Menu Themes" tooltipPosition="bottom"></p-inputSwitch>
                    </span>

                    <div *ngIf="app.layoutMode!=='dark'" class="p-grid">
                        <div *ngFor="let t of topbarThemes" class="p-col p-col-fixed">
                            <a style="cursor: pointer" (click)="changeTopbarTheme(t)" [ngClass]="{'layout-config-color-option': true, 'p-disabled': isDisabled(filteredTopbarThemes, t)}" [title]="t.name">
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

    matchingMenuTheme: boolean = false;

    matchingTopbarTheme: boolean = false;

    selectedMenuTheme: any;

    selectedTopbarTheme: any;

    filteredMenuThemes: any[];

    filteredTopbarThemes: any[];

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
            {name: 'light', color: '#FDFEFF', topbarThemes: ['white', 'lightblue', 'dark', 'blue', 'deeppurple', 'purple', 'pink', 'cyan', 'teal', 'green', 'lightgreen', 'lime', 'yellow', 'amber', 'orange', 'deeporange', 'brown', 'light', 'bluegrey', 'indigo', 'grey']},
            {name: 'dark', color: '#434B54', topbarThemes: ['white', 'lightblue', 'dark', 'blue', 'deeppurple', 'purple', 'pink', 'cyan', 'teal', 'green', 'lightgreen', 'lime', 'yellow', 'amber', 'orange', 'deeporange', 'brown', 'light', 'bluegrey', 'indigo', 'grey']},
            {name: 'indigo', color: '#1A237E', topbarThemes: ['indigo', 'lightblue', 'blue', 'dark', 'white']},
            {name: 'bluegrey', color: '#37474F', topbarThemes: ['white', 'lightblue', 'dark', 'blue', 'deeppurple', 'purple', 'pink', 'cyan', 'teal', 'green', 'lightgreen', 'lime', 'yellow', 'amber', 'orange', 'deeporange', 'light', 'bluegrey', 'indigo', 'grey']},
            {name: 'brown', color: '#4E342E', topbarThemes: ['brown', 'dark', 'white', 'pink', 'green', 'lightgreen', 'lime', 'yellow', 'orange', 'deeporange', 'grey']},
            {name: 'cyan', color: '#006064', topbarThemes: ['cyan', 'dark', 'white', 'teal', 'bluegrey']},
            {name: 'green', color: '#2E7D32', topbarThemes: ['green', 'dark', 'white', 'brown', 'lightgreen', 'grey', 'bluegrey']},
            {name: 'deeppurple', color: '#4527A0', topbarThemes: ['deeppurple', 'dark', 'white', 'purple', 'pink', 'orange']},
            {name: 'deeporange', color: '#BF360C', topbarThemes: ['deeporange', 'dark', 'white', 'yellow', 'amber', 'orange', 'brown', 'grey']},
            {name: 'pink', color: '#880E4F', topbarThemes: ['pink', 'dark', 'white', 'purple', 'deeppurple', 'yellow', 'amber', 'orange', 'bluegrey']},
            {name: 'purple', color: '#6A1B9A', topbarThemes: ['purple', 'dark', 'white', 'deeppurple', 'pink', 'orange']},
            {name: 'teal', color: '#00695C', topbarThemes: ['teal', 'dark', 'white', 'cyan', 'green', 'lightgreen', 'orange', 'deeporange', 'grey', 'bluegrey']},
            {name: 'darker', color: '#212121', topbarThemes: ['white', 'lightblue', 'dark', 'blue', 'deeppurple', 'purple', 'pink', 'cyan', 'teal', 'green', 'lightgreen', 'lime', 'yellow', 'amber', 'orange', 'deeporange', 'brown', 'light', 'bluegrey', 'indigo', 'grey']}
        ];

        this.topbarThemes = [
            {name: 'lightblue', color: '#2E88FF', menuThemes: ['light', 'dark', 'darker', 'indigo', 'bluegrey']},
            {name: 'dark', color: '#363636', menuThemes: ['dark', 'light', 'indigo', 'bluegrey', 'brown', 'cyan', 'green', 'deeppurple', 'deeporange', 'pink', 'purple', 'teal', 'darker']},
            {name: 'white', color: '#FDFEFF', menuThemes: ['dark', 'light', 'indigo', 'bluegrey', 'brown', 'cyan', 'green', 'deeppurple', 'deeporange', 'pink', 'purple', 'teal', 'darker']},
            {name: 'blue', color: '#1565C0', menuThemes: ['dark', 'light', 'indigo', 'bluegrey', 'darker']},
            {name: 'deeppurple', color: '#4527A0', menuThemes: ['deeppurple', 'light', 'dark', 'darker', 'indigo', 'bluegrey', 'purple']},
            {name: 'purple', color: '#6A1B9A', menuThemes: ['purple', 'dark', 'light', 'darker', 'deeppurple', 'bluegrey', 'brown', 'pink']},
            {name: 'pink', color: '#AD1457', menuThemes: ['pink', 'dark', 'light', 'darker', 'bluegrey', 'brown']},
            {name: 'cyan', color: '#0097A7', menuThemes: ['cyan', 'dark', 'light', 'darker', 'bluegrey', 'brown', 'teal']},
            {name: 'teal', color: '#00796B', menuThemes: ['teal', 'dark', 'light', 'darker', 'bluegrey', 'cyan']},
            {name: 'green', color: '#43A047', menuThemes: ['green', 'dark', 'light', 'darker', 'bluegrey', 'brown', 'teal']},
            {name: 'lightgreen', color: '#689F38', menuThemes: ['green', 'dark', 'light', 'darker', 'bluegrey', 'brown']},
            {name: 'lime', color: '#AFB42B', menuThemes: ['light', 'dark', 'bluegrey', 'darker', 'brown']},
            {name: 'yellow', color: '#FBC02D', menuThemes: ['light', 'dark', 'darker', 'bluegrey', 'brown', 'deeporange']},
            {name: 'amber', color: '#FFA000', menuThemes: ['light', 'dark', 'darker', 'bluegrey', 'brown', 'deeporange']},
            {name: 'orange', color: '#FB8C00', menuThemes: ['dark', 'light', 'darker', 'bluegrey', 'brown', 'deeporange']},
            {name: 'deeporange', color: '#D84315', menuThemes: ['deeporange', 'dark', 'light', 'darker', 'bluegrey', 'brown']},
            {name: 'brown', color: '#5D4037', menuThemes: ['brown', 'dark', 'light', 'darker', 'bluegrey', 'deeporange', 'teal', 'cyan']},
            {name: 'grey', color: '#616161', menuThemes: ['dark', 'light', 'indigo', 'bluegrey', 'brown', 'cyan', 'green', 'deeppurple', 'deeporange', 'pink', 'purple', 'teal', 'darker']},
            {name: 'bluegrey', color: '#546E7A', menuThemes: ['dark', 'light', 'indigo', 'bluegrey', 'brown', 'cyan', 'green', 'deeppurple', 'deeporange', 'pink', 'purple', 'teal', 'darker']},
            {name: 'indigo', color: '#3F51B5', menuThemes: ['indigo', 'dark', 'light', 'darker', 'bluegrey']}
        ];

        this.selectedMenuTheme = this.menuThemes.find(theme => theme.name === this.menuTheme);
        this.selectedTopbarTheme = this.topbarThemes.find(theme => theme.name === this.topbarTheme);
    }

    findFilteredThemes(themes, selectedTheme, key, isMatching) {
        if (isMatching)
            return themes.filter(t => selectedTheme[key].some(st => st === t.name));
        else
            return null;
    }

    onMatchingTopbarThemeChange(event) {
        this.filteredTopbarThemes = this.findFilteredThemes(this.topbarThemes, this.selectedMenuTheme, 'topbarThemes', event.checked);
    }

    onMatchingMenuThemeChange(event) {
        this.filteredMenuThemes = this.findFilteredThemes(this.menuThemes, this.selectedTopbarTheme, 'menuThemes', event.checked);
    }

    isDisabled(filteredThemes, theme) {
        return filteredThemes && filteredThemes.filter(fT => fT.name === theme.name).length === 0;
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

        this.replaceLink(themeLink, newURL, this.appMain['refreshChart']);
    }

    changeTheme(theme) {
        this.theme = theme;

        const themeLink: HTMLLinkElement = document.getElementById('theme-css') as HTMLLinkElement;
        const themeHref = 'assets/theme/' + theme + '/theme-' + this.app.layoutMode + '.css';
        this.replaceLink(themeLink, themeHref);
    }

    changeMenuTheme(theme) {
        this.selectedMenuTheme = theme;
        this.app.menuTheme = theme.name;
        this.filteredTopbarThemes = this.findFilteredThemes(this.topbarThemes, theme, 'topbarThemes', this.matchingTopbarTheme);
    }

    changeTopbarTheme(theme) {
        this.selectedTopbarTheme = theme;
        this.app.topbarTheme = theme.name;
        this.filteredMenuThemes = this.findFilteredThemes(this.menuThemes, theme, 'menuThemes', this.matchingMenuTheme);

        const appLogoLink: HTMLImageElement = document.getElementById('app-logo') as HTMLImageElement;

        if (theme.name == 'white' || theme.name == 'yellow' || theme.name == 'amber'  || theme.name == 'orange' || theme.name == 'lime') {
            appLogoLink.src = 'assets/layout/images/logo-dark.svg';
        }
        else {
            appLogoLink.src = 'assets/layout/images/logo-light.svg';
        }

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
