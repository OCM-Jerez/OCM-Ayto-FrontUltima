import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Observable, of } from "rxjs";

import { ConfirmationService } from "primeng/api";
import { MessageService } from "primeng/api";

import { ProgramaService } from "../../service/programaservice";
import { AppBreadcrumbService } from "../../layout/breadcrumb/app.breadcrumb.service";

import { IPrograma, ISavePrograma } from "../../domain/programa";
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

})
export class AppProgramasComponent implements OnInit {
    programaDialog: boolean;
    programaNew: boolean;
    programas$: Observable<IPrograma[]>;
    programa: IPrograma;
    selectedProgramas: IPrograma[];
    submitted: boolean;
    colsCSV: any[];
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
        this.colsCSV = [
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

    detailPrograma(codPro: string, desPro: string) {
        // Video comunicación entre componentes de Fernando Herrera.
        // https://youtu.be/df0eH9mM9nU?t=1262
        this.programaService.codPro = codPro;
        this.programaService.desPro = desPro;
        this.router.navigate(["/pages/programaDetail"]);
    }

    editPrograma(programa: IPrograma) {
        this.programa = { ...programa };
        this.programaDialog = true;
        this.programaNew = false;
        this.formGroup.patchValue(
            {
                codPro: programa.codPro,
                descripcionAyto: programa.descripcionAyto,
                descripcionOCM: programa.descripcionOCM,
                WebOCM: programa.WebOCM,
                uso: programa.uso,
                codOrg: programa.codOrg,
                observaciones: programa.observaciones,
            }
        )
    }

    savePrograma() {
        if (this.programaNew) {
            const send = this.formGroup.value as ISavePrograma;
            this.programaService.postPrograma(send).subscribe(response => {
                this._savePrograma(response, 'creado');
            });
        }
        else {
            const send = this.formGroup.value as IPrograma;
            this.programaService.updatePrograma(this.programa.id, send).subscribe(response => {
                this._savePrograma(response, 'editado');
            })
        }

    }

    private _savePrograma(response: IPrograma[], message: string) {
        this.messageService.add({ severity: 'success', summary: 'Todo correcto', detail: `programa ${message}`, life: 4000 });
        this.programas$ = of(response);
        this.formGroup.reset();
        this.programaDialog = false;
        this.programaNew = true;
    }

    deletePrograma(programa: IPrograma) {
        this.confirmationService.confirm({
            message: '¿Estas seguro que quieres borrar el programa: ' + programa.descripcionOCM + '?',
            header: 'Confirmar',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.programaService.deletePrograma(programa.id).subscribe(response => {
                    this.messageService.add({ severity: 'success', summary: 'Todo correcto', detail: 'programa borrado', life: 4000 });
                    this.programas$ = of(response);
                })
            }
        });
    }

    hideDialog() {
        this.programaDialog = false;
        this.submitted = false;
    }

    private _loadForm(): void {
        this.formGroup = this._formBuilder.group(
            {
                codPro: [null, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(5)]],
                descripcionAyto: [null, [Validators.required, Validators.minLength(20)]],
                descripcionOCM: [null, [Validators.required, Validators.minLength(20)]],
                WebOCM: [null, [Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
                // proCreatedDate: [null],
                // proDeletedDate: [null],
                uso: [null],
                codOrg: [null],
                observaciones: [null],
            }
        )
    }


    getError(controlName: string): string {
        const control = this.formGroup.get(controlName)
        if (control.hasError('required')) {
            return 'El campo es requerido. Por favor, introduce un valor.';
        }

        if (control.hasError('pattern')) {
            switch (controlName) {
                case 'codPro':
                    return 'Deber ser numeros';
                case 'WebOCM':
                    return 'La URL no es correcta.';
                default:
                    break;
            }
        }

        if (control.hasError('minlength')) {
            switch (controlName) {
                case 'codPro':
                    return 'Debe tener al menos 5 caracteres.';
                case 'descripcionAyto':
                    return 'Debe tener al menos 20 caracteres.';
                case 'descripcionOCM':
                    return 'Debe tener al menos 25 caracteres.';
                default:
                    break;
            }
        }

        return '';

    }

    // get codProAbstract(): AbstractControl {
    //     return this.formGroup.get('codPro');
    // }

    // get descriptionAytoAbstract(): AbstractControl {
    //     return this.formGroup.get('descripcionAyto');
    // }

    // get descriptionOCMAbstract(): AbstractControl {
    //     return this.formGroup.get('descripcionOCM');
    // }

    // get WebOCMAbstract(): AbstractControl {
    //     return this.formGroup.get('WebOCM');
    // }

    // get usoAbstract(): AbstractControl {
    //     return this.formGroup.get('uso');
    // }

    // get codOrgAbstract(): AbstractControl {
    //     return this.formGroup.get('codOrg');
    // }

    // get observacionesAbstract(): AbstractControl {
    //     return this.formGroup.get('observaciones');
    // }

}