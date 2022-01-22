import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Observable } from "rxjs";

import { OrganicoService } from "../../../service";
import { AppBreadcrumbService } from "../../../layout/breadcrumb/app.breadcrumb.service";

import { Organico } from "../../../domain";
@Component({
  selector: 'app-organicos',
  templateUrl: './organicos.component.html',
  styleUrls: ['./organicos.component.scss'],
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

export class OrganicosComponent implements OnInit {
  organicoDialog: boolean;
  organicos$: Observable<Organico[]>;
  organico: Organico;
  selectedOrganicos: Organico[];
  submitted: boolean;
  cols: any[];

  constructor(
    private organicoService: OrganicoService,
    private breadcrumbService: AppBreadcrumbService,
    private router: Router
  ) {
    this.breadcrumbService.setItems([
      { label: "Gastos" },
      { label: "Organicos", routerLink: ["/pages/organicos"] },
    ]);
  }

  ngOnInit() {
    this.organicos$ = this.organicoService.getOrganicos();
    // Nombres columnas al exportar a .CSV.
    this.cols = [
      { field: "Codigo", header: "Codigo" },
      { field: "Descripcion", header: "Descripcion" },
      { field: "Observaciones", header: "Observaciones" },
      { field: "WEBOCM", header: "WEBOCM" },
    ];
  }

  openNew() {
    this.organico = {};
    this.submitted = false;
    this.organicoDialog = true;
  }

  editPrograma(organico: Organico) {
    this.organico = { ...organico };
    this.organicoDialog = true;
  }

  detailPrograma(codPro: string, desPro: string) {
    this.organicoService.codPro = codPro;
    this.organicoService.desPro = desPro;
    this.router.navigate(["/pages/programaDetail"]);
  }

  hideDialog() {
    this.organicoDialog = false;
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
