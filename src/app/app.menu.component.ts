import { Component, OnInit } from "@angular/core";
import { AppComponent } from "./app.component";

@Component({
    selector: "app-menu",
    template: `
        <ul class="layout-menu">
            <li
                app-menuitem
                *ngFor="let item of model; let i = index"
                [item]="item"
                [index]="i"
                [root]="true"
            ></li>
        </ul>
    `,
})
export class AppMenuComponent implements OnInit {
    model: any[];

    constructor(public app: AppComponent) { }

    ngOnInit() {
        this.model = [
            {
                label: "Dashboard",
                icon: "pi pi-fw pi-home",
                items: [
                    {
                        label: "Ingresos",
                        icon: "pi pi-fw pi-euro",
                        routerLink: ["/"],
                        badge: "4",
                        badgeClass: "p-badge-info",
                    },
                    {
                        label: "Gastos",
                        icon: "pi pi-fw pi-shopping-cart",
                        routerLink: ["/favorites/dashboardanalytics"],
                        badge: "2",
                        badgeClass: "p-badge-success",
                    },
                    {
                        label: "Retrasos",
                        icon: "pi pi-fw pi-calendar-plus",
                        routerLink: ["/dashboardtiempos"],
                        badge: "5",
                        badgeClass: "p-badge-success",
                    },
                ],
            },
            {
                label: "Ingresos",
                icon: "pi pi-fw pi-briefcase",
                routerLink: ["/pages"],
                items: [
                    {
                        label: "Cápitulos",
                        icon: "pi pi-fw pi-folder-open",
                        routerLink: ["/pages/capituloIngresos"],
                    },
                    {
                        label: "Económicos",
                        icon: "pi pi-fw pi-folder-open",
                        routerLink: ["pages/ecoIngresos"],
                    },
                ],
            },
            {
                label: "Gastos",
                icon: "pi pi-fw pi-briefcase",
                routerLink: ["/pages"],
                items: [
                    {
                        label: "Organicos",
                        icon: "pi pi-fw pi-folder-open",
                        routerLink: ["/pages/organicos"],
                    },
                    {
                        label: "Programas",
                        icon: "pi pi-fw pi-folder-open",
                        routerLink: ["/pages/programas"],
                    },
                    {
                        label: "Económicos",
                        icon: "pi pi-fw pi-folder-open",
                        routerLink: ["pages/ecoGastos"],
                    },
                ],
            },
            {
                label: "Presupuestos",
                icon: "pi pi-fw pi-briefcase",
                routerLink: ["/pages"],
                items: [
                    {
                        label: "Presupuestos",
                        icon: "pi pi-fw pi-book",
                        routerLink: ["/pages/presupuestos"],
                    },
                ],
            },
        ];
    }
}
