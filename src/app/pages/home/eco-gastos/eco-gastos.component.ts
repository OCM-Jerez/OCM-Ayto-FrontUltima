import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Observable } from "rxjs";


import { EcoGastoService } from "../../../service";
import { AppBreadcrumbService } from "../../../layout/breadcrumb/app.breadcrumb.service";

import { Economico } from "../../../domain";
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
})

export class EcoGastosComponent implements OnInit {
  economicoDialog: boolean;
  economico$: Observable<Economico[]>;
  economico: Economico;
  selectedEconomicos: Economico[];
  submitted: boolean;
  cols: any[];

  constructor(
    private ecoGastoService: EcoGastoService,
    private breadcrumbService: AppBreadcrumbService,
    private router: Router
  ) {
    this.breadcrumbService.setItems([
      { label: "Gastos" },
      { label: "Economicos", routerLink: ["/pages/economicos"] },
    ]);
  }

  ngOnInit() {
    this.economico$ = this.ecoGastoService.getEcoGasto();
    // Nombres columnas al exportar a .CSV.
    this.cols = [
      { field: "Codigo", header: "Codigo" },
      { field: "Descripcion", header: "Descripcion" },
      { field: "Observaciones", header: "Observaciones" },
      { field: "WEBOCM", header: "WEBOCM" },
    ];
  }

  openNew() {
    this.economico = {};
    this.submitted = false;
    this.economicoDialog = true;
  }

  editEconomico(economico: Economico) {
    this.economico = { ...economico };
    this.economicoDialog = true;
  }

  detailEconomico(codEco: string, desEco: string) {
    this.ecoGastoService.codEco = codEco;
    this.ecoGastoService.desEco = desEco;
    this.router.navigate(["/pages/programaDetail"]);
  }

  hideDialog() {
    this.economicoDialog = false;
    this.submitted = false;
  }

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