import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Programa } from "../../domain/programa";
import { ProgramaService } from "../../service/programaservice";
import { ConfirmationService } from "primeng/api";
import { MessageService } from "primeng/api";
import { AppBreadcrumbService } from "../../app.breadcrumb.service";
import { Observable } from "rxjs";

@Component({
    templateUrl: "./app.programas.component.html",
    // styleUrls: ['../demo/view/tabledemo.scss'],
    styleUrls: ["./app.programas.scss"],
    styles: [
        `
            :host ::ng-deep .p-dialog .product-image {
                width: 150px;
                margin: 0 auto 2rem auto;
                display: block;
            }

            @media screen and (max-width: 960px) {
                :host
                    ::ng-deep
                    .p-datatable.p-datatable-customers
                    .p-datatable-tbody
                    > tr
                    > td:last-child {
                    text-align: center;
                }

                :host
                    ::ng-deep
                    .p-datatable.p-datatable-customers
                    .p-datatable-tbody
                    > tr
                    > td:nth-child(6) {
                    display: flex;
                }
            }
        `,
    ],
    providers: [MessageService, ConfirmationService],
})
export class AppProgramasComponent implements OnInit {
    programaDialog: boolean;
    // programas: Programa[];
    programas$: Observable<Programa[]>;

    programa: Programa;
    selectedProgramas: Programa[];
    submitted: boolean;
    cols: any[];

    constructor(
        private programaService: ProgramaService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private breadcrumbService: AppBreadcrumbService,
        private router: Router
    ) {
        this.breadcrumbService.setItems([
            { label: "Gastos" },
            { label: "Programas", routerLink: ["/pages/programas"] },
        ]);
    }

    ngOnInit() {
        // this.programaService.getProgramas().then(data => this.programas = data);
        // this.programaService.getProgramas().
        // subscribe(resp => this.programas = resp)

        // https://platzi.com/clases/1731-angular-profesional/23605-evitando-doble-subscribe/
        // No hace falta subscribe pero hay que añadir async en el html
        // <p-table #dt [value]="programas$ | async" ..................
        this.programas$ = this.programaService.getProgramas();

        // Nombres columnas al exportar a .CSV.
        this.cols = [
            { field: "Codigo", header: "Codigo" },
            { field: "Descripcion", header: "Descripcion" },
            { field: "Observaciones", header: "Observaciones" },
            { field: "WEBOCM", header: "WEBOCM" },
            // { field: 'inventoryStatus', header: 'Status' }
        ];
    }

    openNew() {
        this.programa = {};
        this.submitted = false;
        this.programaDialog = true;
    }

    // Al pasar programas a observable tengo que comentarlo porque this.programas da error.
    // deleteSelectedProgramas() {
    //     this.confirmationService.confirm({
    //         message: 'Are you sure you want to delete the selected programas?',
    //         header: 'Confirm',
    //         icon: 'pi pi-exclamation-triangle',
    //         accept: () => {
    //             this.programas = this.programas.filter(val => !this.selectedProgramas.includes(val));
    //             this.selectedProgramas = null;
    //             this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Programas Deleted', life: 3000});
    //         }
    //     });
    // }

    editPrograma(programa: Programa) {
        this.programa = { ...programa };
        this.programaDialog = true;
    }

    detailPrograma(codPro: string, desPro: string) {
        // Video comunicación entre componentes de Fernando Herrera.
        // https://youtu.be/df0eH9mM9nU?t=1262
        this.programaService.codPro = codPro;
        this.programaService.desPro = desPro;
        this.router.navigate(["/pages/programaDetail"]);
    }

    // deletePrograma(programa: Programa) {
    //     this.confirmationService.confirm({
    //         message: 'Are you sure you want to delete ' + programa.name + '?',
    //         header: 'Confirm',
    //         icon: 'pi pi-exclamation-triangle',
    //         accept: () => {
    //             this.programas = this.programas.filter(val => val.id !== programa.id);
    //             this.programa = {};
    //             this.messageService.add({severity: 'success', summary: 'Successful', detail: 'programa Deleted', life: 3000});
    //         }
    //     });
    // }

    hideDialog() {
        this.programaDialog = false;
        this.submitted = false;
    }

    // savePrograma() {
    //     this.submitted = true;

    //     if (this.programa.name.trim()) {
    //         if (this.programa.id) {
    //             this.programas[this.findIndexById(this.programa.id)] = this.programa;
    //             this.messageService.add({severity: 'success', summary: 'Successful', detail: 'programa Updated', life: 3000});
    //         }
    //         else {
    //             this.programa.id = this.createId();
    //             this.programa.image = 'product-placeholder.svg';
    //             this.programas.push(this.programa);
    //             this.messageService.add({severity: 'success', summary: 'Successful', detail: 'programa Created', life: 3000});
    //         }

    //         this.programas = [...this.programas];
    //         this.programaDialog = false;
    //         this.programa = {};
    //     }
    // }

    // findIndexById(id: string): number {
    //     let index = -1;
    //     for (let i = 0; i < this.programas.length; i++) {
    //         if (this.programas[i].id === id) {
    //             index = i;
    //             break;
    //         }
    //     }

    //     return index;
    // }

    createId(): string {
        let id = "";
        const chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }
}
