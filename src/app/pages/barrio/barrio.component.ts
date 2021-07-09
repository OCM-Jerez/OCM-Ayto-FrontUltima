import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Barrio } from "../../domain/barrio";
import { BarrioService } from "../../service/barrio.service";
import { ConfirmationService } from "primeng/api";
import { MessageService } from "primeng/api";
import { AppBreadcrumbService } from "../../app.breadcrumb.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-barrio',
  templateUrl: './barrio.component.html',
  styleUrls: ['./barrio.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class BarrioComponent implements OnInit {
  _dialog: boolean;
  // programas: Organico[];
  _obs$: Observable<Barrio[]>;

  _obj: Barrio;
  _selected: Barrio[];
  submitted: boolean;
  cols: any[];

  constructor(
    private capituloGastoService: BarrioService,
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
    this._obs$ = this.capituloGastoService.getCapituloGasto();
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

  edit(_obj: Barrio) {
    this._obj = { ..._obj };
    this._dialog = true;
  }

  detail(codEco: string, desEco: string) {
    this.capituloGastoService.codEco = codEco;
    this.capituloGastoService.desEco = desEco;
    this.router.navigate(["/pages/programaDetail"]);
  }

  hideDialog() {
    this._dialog = false;
    this.submitted = false;
  }

}
