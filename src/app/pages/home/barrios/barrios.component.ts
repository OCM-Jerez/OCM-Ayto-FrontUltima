import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Observable } from "rxjs";

import { BarrioService } from "../../../service";
import { AppBreadcrumbService } from "../../../layout/breadcrumb/app.breadcrumb.service";
import { Barrio } from "../../../domain";

@Component({
  selector: 'app-barrio',
  templateUrl: './barrios.component.html',
  styleUrls: ['./barrios.component.scss'],
})

export class BarriosComponent implements OnInit {
  _dialog: boolean;
  _obs$: Observable<Barrio[]>;

  _obj: Barrio;
  _selected: Barrio[];
  submitted: boolean;
  cols: any[];

  constructor(
    private barrioService: BarrioService,
    private breadcrumbService: AppBreadcrumbService,
    private router: Router
  ) {
    this.breadcrumbService.setItems([
      { label: "Distribución geografica" },
      { label: "Barrios", routerLink: ["pages/barrio"] },
    ]);
  }

  ngOnInit() {
    this._obs$ = this.barrioService.getBarrio();
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

  edit(_obj: Barrio) {
    this._obj = { ..._obj };
    this._dialog = true;
  }

  detail(codEco: string, desEco: string) {
    this.barrioService.codEco = codEco;
    this.barrioService.desEco = desEco;
    this.router.navigate(["/pages/programaDetail"]);
  }

  hideDialog() {
    this._dialog = false;
    this.submitted = false;
  }

}
