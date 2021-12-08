import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { SeccionCensal } from "../../domain/seccion-censal";
import { SeccionCensalService } from "../../service/seccion-censal.service";
import { ConfirmationService } from "primeng/api";
import { MessageService } from "primeng/api";
import { AppBreadcrumbService } from "../../layout/breadcrumb/app.breadcrumb.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-organoContratacion',
  templateUrl: './seccion-censal.component.html',
  styleUrls: ['./seccion-censal.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class SeccionCensalComponent implements OnInit {
  _dialog: boolean;
  _obs$: Observable<SeccionCensal[]>;

  _obj: SeccionCensal;
  _selected: SeccionCensal[];
  submitted: boolean;
  cols: any[];

  constructor(
    private organoContratacionService: SeccionCensalService,
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
    this._obs$ = this.organoContratacionService.getSeccionCensal();
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

  edit(_obj: SeccionCensal) {
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