import {Component, OnInit} from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-config',
    template: `
        <div class="layout-config" [ngClass]="{'layout-config-active': app.configActive}" (click)="app.onConfigClick($event)">
            <div class="layout-config-content">
                <a style="cursor: pointer" id="layout-config-button" class="layout-config-button" (click)="onConfigButtonClick($event)">
                    <i class="material-icons">settings</i>
                </a>
                <a style="cursor: pointer" class="layout-config-close" (click)="onConfigCloseClick($event)">
                    <i class="material-icons">close</i>
                </a>
                <p-tabView>
                    <p-tabPanel header="Menu">
                        <h1>Menu Modes</h1>
                        <div class="panel-items">
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="app.changeToStaticMenu()">
                                    <img src="assets/layout/images/configurator/menu/ultima-static.png" alt="ultima"/>
                                    <i class="ui-icon-check" *ngIf="app.isStatic()"></i>
                                </a>
                                <span>Static</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="app.changeToOverlayMenu()">
                                    <img src="assets/layout/images/configurator/menu/ultima-overlay.png" alt="ultima"/>
                                    <i class="pi pi-check" *ngIf="app.isOverlay()"></i>
                                </a>
                                <span>Overlay</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="app.changeToHorizontalMenu()">
                                    <img src="assets/layout/images/configurator/menu/ultima-horizontal.png" alt="ultima"/>
                                    <i class="pi pi-check" *ngIf="app.isHorizontal()"></i>
                                </a>
                                <span>Horizontal</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="app.changeToSlimMenu()">
                                    <img src="assets/layout/images/configurator/menu/ultima-slim.png" alt="ultima"/>
                                    <i class="pi pi-check" *ngIf="app.isSlim()"></i>
                                </a>
                                <span>Slim</span>
                            </div>
                        </div>
                        <h1>Menu Colors</h1>
                        <div class="panel-items">
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="this.app.darkMenu = true">
                                    <img src="assets/layout/images/configurator/menu/ultima-dark.png" alt="ultima"/>
                                    <i class="pi pi-check" *ngIf="this.app.darkMenu"></i>
                                </a>
                                <span>Dark</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="this.app.darkMenu = false">
                                    <img src="assets/layout/images/configurator/menu/ultima-static.png" alt="ultima"/>
                                    <i class="pi pi-check" *ngIf="!app.darkMenu"></i>
                                </a>
                                <span>Light</span>
                            </div>
                        </div>
                    </p-tabPanel>
                    <p-tabPanel header="User Profile">
                        <div class="panel-items">
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="this.app.profileMode = 'inline'">
                                    <img src="assets/layout/images/configurator/menu/ultima-inline.png" alt="ultima"/>
                                    <i class="pi pi-check" *ngIf="app.profileMode === 'inline'"></i>
                                </a>
                                <span>Inline</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="this.app.profileMode = 'top'">
                                    <img src="assets/layout/images/configurator/menu/ultima-popup.png" alt="ultima"/>
                                    <i class="pi pi-check" *ngIf="app.profileMode === 'top'"></i>
                                </a>
                                <span>Overlay</span>
                            </div>
                        </div>
                    </p-tabPanel>
                    <p-tabPanel header="Size">
                        <div class="panel-items">
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="app.layoutCompact = true">
                                    <img src="assets/layout/images/configurator/menu/ultima-compact.png" alt="ultima"/>
                                    <i class="pi pi-check" *ngIf="app.layoutCompact"></i>
                                </a>
                                <span>Compact Size</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="app.layoutCompact = false">
                                    <img src="assets/layout/images/configurator/menu/ultima-material.png" alt="ultima"/>
                                    <i class="pi pi-check" *ngIf="!app.layoutCompact"></i>
                                </a>
                                <span>Material Size</span>
                            </div>
                        </div>
                    </p-tabPanel>
                    <p-tabPanel header="Themes">
                        <div class="panel-items">
                            <div class="panel-item" *ngFor="let theme of themes">
                                <a style="cursor: pointer" class="layout-config-option" (click)="changeTheme(theme.label)">
                                    <img src="assets/layout/images/configurator/theme/{{theme.image}}.svg" alt="ultima"/>
                                    <i class="pi pi-check" *ngIf="themeColor === theme.label"></i>
                                </a>
                            </div>
                        </div>
                    </p-tabPanel>
                </p-tabView>
            </div>
        </div>
    `
})
export class AppConfigComponent implements OnInit {

    themes: any[];

    themeColor = 'indigo';

    constructor(public app: AppMainComponent) {}

    ngOnInit() {
        this.themes = [
            {image: 'indigo-pink', label: 'indigo'},
            {image: 'brown-green', label: 'brown'},
            {image: 'blue-amber', label: 'blue'},
            {image: 'bluegrey-green', label: 'blue-grey'},
            {image: 'dark-blue', label: 'dark-blue'},
            {image: 'dark-green', label: 'dark-green'},
            {image: 'green-yellow', label: 'green'},
            {image: 'purple-cyan', label: 'purple-cyan'},
            {image: 'purple-amber', label: 'purple-amber'},
            {image: 'teal-lime', label: 'teal'},
            {image: 'cyan-amber', label: 'cyan'},
            {image: 'grey-deeporange', label: 'grey'}
        ];
    }

    changeTheme(theme) {
        const themeLink: HTMLLinkElement = document.getElementById('theme-css') as HTMLLinkElement ;
        const layoutLink: HTMLLinkElement = document.getElementById('layout-css') as HTMLLinkElement ;

        this.themeColor = theme;
        themeLink.href = 'assets/theme/theme-' + theme + '.css';
        layoutLink.href = 'assets/layout/css/layout-' + theme + '.css';
    }

    onConfigButtonClick(event) {
        this.app.configActive = !this.app.configActive;
        event.preventDefault();
    }

    onConfigCloseClick(event) {
        this.app.configActive = false;
        event.preventDefault();
    }
}
