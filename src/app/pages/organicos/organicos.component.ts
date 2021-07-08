import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Organico } from "../../domain/organico";
import { OrganicoService } from "../../service/organicoservice";
import { ConfirmationService } from "primeng/api";
import { MessageService } from "primeng/api";
import { AppBreadcrumbService } from "../../app.breadcrumb.service";
import { Observable } from "rxjs";

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
  providers: [MessageService, ConfirmationService],
})
export class OrganicosComponent implements OnInit {
  organicoDialog: boolean;
  // programas: Organico[];
  organicos$: Observable<Organico[]>;

  organico: Organico;
  selectedOrganicos: Organico[];
  submitted: boolean;
  cols: any[];

  constructor(
    private organicoService: OrganicoService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
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
      // { field: 'inventoryStatus', header: 'Status' }
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
