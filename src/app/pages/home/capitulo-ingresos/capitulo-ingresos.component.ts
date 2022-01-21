import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { CapituloIngreso } from "../../../domain/capitulo-ingreso";
import { CapituloIngresoService } from "../../../service/capitulo-ingreso.service";
import { ConfirmationService } from "primeng/api";
import { MessageService } from "primeng/api";
import { AppBreadcrumbService } from "../../../layout/breadcrumb/app.breadcrumb.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-capitulo-ingresos',
  templateUrl: './capitulo-ingresos.component.html',
  styleUrls: ['./capitulo-ingresos.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class CapituloIngresosComponent implements OnInit {
  _dialog: boolean;
  // programas: Organico[];
  _obs$: Observable<CapituloIngreso[]>;

  _obj: CapituloIngreso;
  _selected: CapituloIngreso[];
  submitted: boolean;
  cols: any[];

  constructor(
    private capituloIngresoService: CapituloIngresoService,
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
    this._obs$ = this.capituloIngresoService.getCapituloIngreso();
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

  edit(_obj: CapituloIngreso) {
    this._obj = { ..._obj };
    this._dialog = true;
  }

  detail(codEco: string, desEco: string) {
    this.capituloIngresoService.codEco = codEco;
    this.capituloIngresoService.desEco = desEco;
    this.router.navigate(["/pages/programaDetail"]);
  }

  hideDialog() {
    this._dialog = false;
    this.submitted = false;
  }

}
