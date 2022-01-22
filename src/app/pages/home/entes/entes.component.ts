import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Observable } from "rxjs";

import { EnteService } from "../../../service";
import { AppBreadcrumbService } from "../../../layout/breadcrumb/app.breadcrumb.service";

import { Ente } from "../../../domain";

@Component({
  selector: 'app-ente',
  templateUrl: './entes.component.html',
  styleUrls: ['./entes.component.scss'],
})

export class EntesComponent implements OnInit {
  _dialog: boolean;
  _obs$: Observable<Ente[]>;
  _obj: Ente;
  _selected: Ente[];
  submitted: boolean;
  cols: any[];

  constructor(
    private enteService: EnteService,
    private breadcrumbService: AppBreadcrumbService,
    private router: Router
  ) {
    this.breadcrumbService.setItems([
      { label: "Organización municipal" },
      { label: "Entes", routerLink: ["pages/ente"] },
    ]);
  }

  ngOnInit() {
    this._obs$ = this.enteService.getEnte();
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

  edit(_obj: Ente) {
    this._obj = { ..._obj };
    this._dialog = true;
  }

  detail(codEco: string, desEco: string) {
    this.enteService.codEco = codEco;
    this.enteService.desEco = desEco;
    this.router.navigate(["/pages/programaDetail"]);
  }

  hideDialog() {
    this._dialog = false;
    this.submitted = false;
  }

}