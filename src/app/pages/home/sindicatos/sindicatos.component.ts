import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Observable } from "rxjs";

import { SindicatoService } from "../../../service";
import { AppBreadcrumbService } from "../../../layout/breadcrumb/app.breadcrumb.service";

import { Sindicato } from "../../../domain";
@Component({
  selector: 'app-sindicato',
  templateUrl: './sindicatos.component.html',
  styleUrls: ['./sindicatos.component.scss'],
})

export class SindicatosComponent implements OnInit {
  _dialog: boolean;
  _obs$: Observable<Sindicato[]>;
  _obj: Sindicato;
  _selected: Sindicato[];
  submitted: boolean;
  cols: any[];

  constructor(
    private sindicatoService: SindicatoService,
    private breadcrumbService: AppBreadcrumbService,
    private router: Router
  ) {
    this.breadcrumbService.setItems([
      { label: "Organización municipal" },
      { label: "Sindicatos", routerLink: ["pages/sindicato"] },
    ]);
  }

  ngOnInit() {
    this._obs$ = this.sindicatoService.getSindicato();
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

  edit(_obj: Sindicato) {
    this._obj = { ..._obj };
    this._dialog = true;
  }

  detail(codEco: string, desEco: string) {
    this.sindicatoService.codEco = codEco;
    this.sindicatoService.desEco = desEco;
    this.router.navigate(["/pages/programaDetail"]);
  }

  hideDialog() {
    this._dialog = false;
    this.submitted = false;
  }

}