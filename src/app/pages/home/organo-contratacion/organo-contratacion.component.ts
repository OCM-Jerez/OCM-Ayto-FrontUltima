import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { OrganoContratacion } from "../../../domain/organo-contratacion";
import { OrganoContratacionService } from "../../../service/organo-contratacion.service";
import { ConfirmationService } from "primeng/api";
import { MessageService } from "primeng/api";
import { AppBreadcrumbService } from "../../../layout/breadcrumb/app.breadcrumb.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-organoContratacion',
  templateUrl: './organo-contratacion.component.html',
  styleUrls: ['./organo-contratacion.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class OrganoContratacionComponent implements OnInit {
  _dialog: boolean;
  _obs$: Observable<OrganoContratacion[]>;

  _obj: OrganoContratacion;
  _selected: OrganoContratacion[];
  submitted: boolean;
  cols: any[];

  constructor(
    private organoContratacionService: OrganoContratacionService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private breadcrumbService: AppBreadcrumbService,
    private router: Router
  ) {
    this.breadcrumbService.setItems([
      { label: "Ingresos" },
      { label: "Económicos", routerLink: ["pages/ecoIngresos"] },
    ]);
  }

  ngOnInit() {
    this._obs$ = this.organoContratacionService.getOrganoContratacion();
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
    this._obj = {};
    this.submitted = false;
    this._dialog = true;
  }

  edit(_obj: OrganoContratacion) {
    this._obj = { ..._obj };
    this._dialog = true;
  }

  detail(codEco: string, desEco: string) {
    this.organoContratacionService.codEco = codEco;
    this.organoContratacionService.desEco = desEco;
    this.router.navigate(["/pages/programaDetail"]);
  }

  hideDialog() {
    this._dialog = false;
    this.submitted = false;
  }

}