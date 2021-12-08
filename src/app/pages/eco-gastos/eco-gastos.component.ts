import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Economico } from "../../domain/economico";
import { ConfirmationService } from "primeng/api";
import { MessageService } from "primeng/api";
import { AppBreadcrumbService } from "../../layout/breadcrumb/app.breadcrumb.service";
import { Observable } from "rxjs";
import { EcoGastoService } from "src/app/service/ecogastoservice";
import { ClassGetter } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-eco-gastos',
  templateUrl: './eco-gastos.component.html',
  styleUrls: ['./eco-gastos.component.scss'],
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

export class EcoGastosComponent implements OnInit {
  economicoDialog: boolean;
  // programas: Programa[];
  economico$: Observable<Economico[]>;

  economico: Economico;
  selectedEconomicos: Economico[];
  submitted: boolean;
  cols: any[];

  constructor(
    private ecoGastoService: EcoGastoService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private breadcrumbService: AppBreadcrumbService,
    private router: Router
  ) {
    this.breadcrumbService.setItems([
      { label: "Gastos" },
      { label: "Economicos", routerLink: ["/pages/economicos"] },
    ]);
  }

  ngOnInit() {
    // this.programaService.getProgramas().then(data => this.programas = data);
    // this.programaService.getProgramas().
    // subscribe(resp => this.programas = resp)

    // https://platzi.com/clases/1731-angular-profesional/23605-evitando-doble-subscribe/
    // No hace falta subscribe pero hay que añadir async en el html
    // <p-table #dt [value]="programas$ | async" ..................
    this.economico$ = this.ecoGastoService.getEcoGasto();

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
    this.economico = {};
    this.submitted = false;
    this.economicoDialog = true;
  }

  // Al pasar programas a observable tengo que comewntarlo porque this.programas da error.
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

  editEconomico(economico: Economico) {
    this.economico = { ...economico };
    this.economicoDialog = true;
  }

  detailEconomico(codEco: string, desEco: string) {
    // Video comunicación entre componentes de Fernando Herrera.
    // https://youtu.be/df0eH9mM9nU?t=1262
    this.ecoGastoService.codEco = codEco;
    this.ecoGastoService.desEco = desEco;
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
    this.economicoDialog = false;
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