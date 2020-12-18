import {Component, ElementRef, ViewChild} from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import {AppComponent} from './app.component';
import {AppMainComponent} from './app.main.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    constructor(public appMain: AppMainComponent, public app: AppComponent) {
    }

    activeItem: number;

    model: MegaMenuItem[] = [
        {
            label: 'UI KIT',
            items: [
                [
                    {label: 'Form Layout', routerLink: '/uikit/formlayout', icon:'pi pi-id-card'},
                    {label: 'Input', routerLink: '/uikit/input', icon:'pi pi-check-square'},
                    {label: 'Button', routerLink: '/uikit/button', icon:'pi pi-mobile'},
                    {label: 'Table', routerLink: '/uikit/table', icon:'pi pi-table'},
                    {label: 'List', routerLink: '/uikit/list', icon:'pi pi-list'},
                    {label: 'Tree', routerLink: '/uikit/tree', icon:'pi pi-share-alt'},
                    {label: 'Panel', routerLink: '/uikit/panel', icon:'pi pi-tablet'},
                ]
            ],
        },
        {
            label: 'UI KIT 2',
            items: [
                [
                    {label: 'Overlay', routerLink: '/uikit/overlay', icon:'pi pi-clone'},
                    {label: 'Media', routerLink: '/uikit/media', icon:'pi pi-image'},
                    {label: 'Menu', routerLink: '/uikit/menu', icon:'pi pi-bars'},
                    {label: 'Message', routerLink: '/uikit/message', icon:'pi pi-comment'},
                    {label: 'File', routerLink: '/uikit/file', icon:'pi pi-file'},
                    {label: 'Chart', routerLink: '/uikit/charts', icon:'pi pi-chart-bar'},
                    {label: 'Misc', routerLink: '/uikit/misc', icon:'pi pi-circle-off'},
                ]
            ],
        },
        {
            label: 'HIERARCHY',
            items: [
                [
                    {label: 'Submenu 1', icon:'pi pi-align-left', items: [
                        {label: 'Submenu 1.1', icon:'pi pi-align-left', items: [
                            {label: 'Submenu 1.1.2', icon:'pi pi-align-left'},
                            {label: 'Submenu 1.1.3', icon:'pi pi-align-left'},
                            {label: 'Submenu 1.1.4', icon:'pi pi-align-left'},
                        ]},
                        {label: 'Submenu 1.2', icon:'pi pi-align-left'},
                        {label: 'Submenu 1.3', icon:'pi pi-align-left'},
                        {label: 'Submenu 1.4', icon:'pi pi-align-left'},

                    ]},
                    {label: 'Submenu 2', icon:'pi pi-align-left', items: [
                        {label: 'Submenu 2.1', icon:'pi pi-align-left', items: [
                            {label: 'Submenu 2.1.2', icon:'pi pi-align-left'},
                            {label: 'Submenu 2.1.3', icon:'pi pi-align-left'},
                            {label: 'Submenu 2.1.4', icon:'pi pi-align-left'},
                        ]},
                        {label: 'Submenu 2.2', icon:'pi pi-align-left'},
                        {label: 'Submenu 2.3', icon:'pi pi-align-left'},
                        {label: 'Submenu 2.4', icon:'pi pi-align-left'},

                    ]},
                    {label: 'Submenu 3', icon:'pi pi-align-left'},
                ]
            ],
        },
    ]

    @ViewChild('searchInput') searchInputViewChild: ElementRef;

    mobileMegaMenuItemClick(index) {
        this.appMain.megaMenuMobileClick = true;
        this.activeItem = this.activeItem === index ? null : index;
    }

    searchAnimationEnd() {
        this.searchInputViewChild.nativeElement.focus();
    }
}
