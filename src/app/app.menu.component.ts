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

    constructor(public app: AppComponent) {}

    ngOnInit() {
        this.model = [
            {
                label: "",
                icon: "pi pi-fw pi-home",
                items: [
                    {
                        label: "Dashboard ingresos",
                        icon: "pi pi-fw pi-euro",
                        routerLink: ["/"],
                        badge: "4",
                        badgeClass: "p-badge-info",
                    },
                    {
                        label: "Dashboard gastos",
                        icon: "pi pi-fw pi-shopping-cart",
                        routerLink: ["/favorites/dashboardanalytics"],
                        badge: "2",
                        badgeClass: "p-badge-success",
                    },
                    {
                        label: "Dashboard tiempos",
                        icon: "pi pi-fw pi-calendar-plus",
                        routerLink: ["/dashboardtiempos"],
                        badge: "5",
                        badgeClass: "p-badge-success",
                    },
                ],
            },
            {
                label: "Paginas",
                icon: "pi pi-fw pi-briefcase",
                routerLink: ["/pages"],
                items: [
                    {
                        label: "Programas",
                        icon: "pi pi-fw pi-folder-open",
                        routerLink: ["/pages/programas"],
                    },
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
