import { Component, OnInit } from "@angular/core";
import { AppComponent } from "../../app.component";

@Component({
    selector: "app-menu",
    templateUrl: './app.menu.component.html',
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
                        routerLink: ["/DashboardIngresos"],
                        badge: "4",
                        badgeClass: "p-badge-info",
                    },
                    {
                        label: "Gastos",
                        icon: "pi pi-fw pi-shopping-cart",
                        routerLink: ["/dashboardGastos"],
                        badge: "2",
                        badgeClass: "p-badge-success",
                    },
                    {
                        label: "Retrasos",
                        icon: "pi pi-fw pi-calendar-plus",
                        routerLink: ["/dashboardTiempos"],
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
                        label: "Cápitulos",
                        icon: "pi pi-fw pi-folder-open",
                        routerLink: ["/pages/capituloGasto"],
                    },
                    {
                        label: "Orgánicos",
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
                label: "Información económica",
                icon: "pi pi-fw pi-briefcase",
                routerLink: ["/pages"],
                items: [
                    {
                        label: "Presupuestos",
                        icon: "pi pi-fw pi-book",
                        routerLink: ["/pages/presupuestos"],
                    },
                    {
                        label: "Cuentas Generales",
                        icon: "pi pi-fw pi-book",
                        routerLink: ["/pages/cuentaGeneral"],
                    },
                ],
            },
            {
                label: "Organización municipal",
                icon: "pi pi-fw pi-briefcase",
                routerLink: ["/pages"],
                items: [
                    {
                        label: "Delegaciones",
                        icon: "pi pi-fw pi-book",
                        routerLink: ["/pages/delegacion"],
                    },
                    {
                        label: "Entes",
                        icon: "pi pi-fw pi-book",
                        routerLink: ["/pages/ente"],
                    },
                    {
                        label: "Organos contratación",
                        icon: "pi pi-fw pi-book",
                        routerLink: ["/pages/organoContratacion"],
                    },
                    {
                        label: "Sindicatos municipales",
                        icon: "pi pi-fw pi-book",
                        routerLink: ["/pages/sindicato"],
                    },
                ],
            },
            {
                label: "Distribución geografica",
                icon: "pi pi-fw pi-briefcase",
                routerLink: ["/pages"],
                items: [
                    {
                        label: "Distritos",
                        icon: "pi pi-fw pi-book",
                        routerLink: ["/pages/distrito"],
                    },
                    {
                        label: "Barrios",
                        icon: "pi pi-fw pi-book",
                        routerLink: ["/pages/barrio"],
                    },
                    {
                        label: "Secciones censales",
                        icon: "pi pi-fw pi-book",
                        routerLink: ["/pages/seccionCensal"],
                    },
                ],
            },
            {
                label: "Temas",
                icon: "pi pi-fw pi-briefcase",
                routerLink: ["/pages"],
                items: [


                ],
            },
        ];
    }
}
