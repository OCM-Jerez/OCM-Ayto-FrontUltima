import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Observable } from "rxjs";

import { CapituloGastoService } from "../../../service";
import { AppBreadcrumbService } from "../../../layout/breadcrumb/app.breadcrumb.service";

import { CapituloGasto } from "../../../domain";

@Component({
  selector: 'app-capitulo-gasto',
  templateUrl: './capitulo-gastos.component.html',
  styleUrls: ['./capitulo-gastos.component.scss'],
})

export class CapituloGastosComponent implements OnInit {
  _dialog: boolean;
  _obs$: Observable<CapituloGasto[]>;

  _obj: CapituloGasto;
  _selected: CapituloGasto[];
  submitted: boolean;
  cols: any[];

  constructor(
    private capituloGastoService: CapituloGastoService,
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
    ];
  }

  openNew() {
    this._obj = {};
    this.submitted = false;
    this._dialog = true;
  }

  edit(_obj: CapituloGasto) {
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
