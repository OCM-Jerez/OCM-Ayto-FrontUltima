import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Observable } from "rxjs";

import { ConfirmationService } from "primeng/api";
import { MessageService } from "primeng/api";
import { IPrograma, ISavePrograma } from "../../domain/programa";
import { ProgramaService } from "../../service/programaservice";
import { AppBreadcrumbService } from "../../layout/breadcrumb/app.breadcrumb.service";

@Component({
    templateUrl: "./app.programas.component.html",
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
    programaNew: boolean;
    programas$: Observable<IPrograma[]>;
    programa: IPrograma;
    selectedProgramas: IPrograma[];
    submitted: boolean;
    cols: any[];
    formGroup: FormGroup;

    constructor(
        private programaService: ProgramaService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private breadcrumbService: AppBreadcrumbService,
        private router: Router,
        private _formBuilder: FormBuilder
    ) {
        this.breadcrumbService.setItems([
            { label: "Gastos" },
            { label: "Programas", routerLink: ["/pages/programas"] },
        ]);
        this._loadForm();
    }

    ngOnInit() {
        // https://platzi.com/clases/1731-angular-profesional/23605-evitando-doble-subscribe/
        // No hace falta subscribe pero hay que añadir async en el html
        // <p-table #dt [value]="programas$ | async" ............
        this.programas$ = this.programaService.getProgramas();

        // this.programaService.getProgramas().subscribe(response => {
        //     console.log(response)
        //      });

        // Nombres columnas al exportar a CSV.
        this.cols = [
            { field: "id", header: "id" },
            { field: "codPro", header: "Codigo" },
            { field: "descripcionAyto", header: "descripcionAyto" },
            { field: "descripcionOCM", header: "descripcionOCM" },
            { field: "WebOCM", header: "WEBOCM" },
            { field: "proCreatedDate", header: "proCreatedDate" },
            { field: "proDeletedDate", header: "proDeletedDate" },
            { field: "uso", header: "uso" },
            { field: "codOrg", header: "codOrg" },
            { field: "Observaciones", header: "Observaciones" },
        ];
    }

    openNew() {
        this.programa = <IPrograma>{};
        this.submitted = false;
        this.programaDialog = true;
        this.programaNew = true;
        this._loadForm();
    }

    editPrograma(programa: IPrograma) {
        this.programa = { ...programa };
        this.programaDialog = true;
        this.programaNew = false;
        this._loadFormActual()
    }

    detailPrograma(codPro: string, desPro: string) {
        // Video comunicación entre componentes de Fernando Herrera.
        // https://youtu.be/df0eH9mM9nU?t=1262
        this.programaService.codPro = codPro;
        this.programaService.desPro = desPro;
        this.router.navigate(["/pages/programaDetail"]);
    }

    deletePrograma(programa: IPrograma) {
        this.confirmationService.confirm({
            message: '¿Estas seguro que quieres borrar el programa: ' + programa.descripcionOCM + '?',
            header: 'Confirmar',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.programaService.deletePrograma(programa.id).subscribe(response => {
                    this.messageService.add({ severity: 'success', summary: 'Todo correcto', detail: 'programa borrado', life: 4000 });
                    this.programas$ = this.programaService.getProgramas();
                })
            }
        });
    }

    hideDialog() {
        this.programaDialog = false;
        this.submitted = false;
    }

    savePrograma() {
        this.submitted = true;
        if (this.formGroup.invalid) {
            return;
        }

        if (this.programaNew) {
            const send = this.formGroup.value as IPrograma;
            this.programaService.postPrograma(send).subscribe(response => {
                this.messageService.add({ severity: 'success', summary: 'Todo correcto', detail: 'programa creado', life: 4000 });
                this.programas$ = this.programaService.getProgramas();
            })
        }
        else {
            const send = this.formGroup.value as IPrograma;
            this.programaService.updatePrograma(this.programa.id, send).subscribe(response => {
                this.messageService.add({ severity: 'success', summary: 'Todo correcto', detail: 'programa actualizado', life: 4000 });
                this.programas$ = this.programaService.getProgramas();
            })
        }
        this.programaDialog = false;
        this.programaNew = false;
    }

    private _loadForm(): void {
        this.formGroup = this._formBuilder.group(
            {
                codPro: [null],
                descripcionAyto: [null],
                descripcionOCM: [null],
                WebOCM: [null],
                // pro
                // proDeletedDate: [null],
                uso: [null],
                codOrg: [null],
                observaciones: [null],
            }
        )
    }

    private _loadFormActual(): void {
        this.formGroup = this._formBuilder.group(
            {
                codPro: [this.programa.codPro, [Validators.required]],
                descripcionAyto: [this.programa.descripcionAyto, [Validators.required]],
                descripcionOCM: [this.programa.descripcionOCM, [Validators.required]],
                WebOCM: [this.programa.WebOCM],
                // proCreatedDate: [null],
                // proDeletedDate: [null],
                uso: [this.programa.uso],
                codOrg: [this.programa.codOrg],
                observaciones: [this.programa.observaciones],
            }
        )
    }

    get codProField() {
        return this.formGroup.get('codPro');
    }

    get descriptionAytoField() {
        return this.formGroup.get('descripcionAyto');
    }

    get descriptionOCMField() {
        return this.formGroup.get('descripcionOCM');
    }

    get WebOCMOCMField() {
        return this.formGroup.get('WebOCM');
    }

    get usoField() {
        return this.formGroup.get('uso');
    }

    get codOrgField() {
        return this.formGroup.get('codOrg');
    }

    get observacionesField() {
        return this.formGroup.get('observaciones');
    }
}
