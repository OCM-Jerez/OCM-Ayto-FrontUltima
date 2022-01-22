import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Observable } from "rxjs";

import { EcoIngresoService } from "../../../service";
import { AppBreadcrumbService } from "../../../layout/breadcrumb/app.breadcrumb.service";

import { EcoIngreso } from "../../../domain";

@Component({
  selector: 'app-eco-ingresos',
  templateUrl: './eco-ingresos.component.html',
  styleUrls: ['./eco-ingresos.component.scss']
})

export class EcoIngresosComponent implements OnInit {
  ecoIngresoDialog: boolean;
  ecoIngreso$: Observable<EcoIngreso[]>;

  ecoIngreso: EcoIngreso;
  selectedEcoIngreso: EcoIngreso[];
  submitted: boolean;
  cols: any[];

  constructor(
    private ecoIngresoService: EcoIngresoService,

    private breadcrumbService: AppBreadcrumbService,
    private router: Router
  ) {
    this.breadcrumbService.setItems([
      { label: "Ingresos" },
      { label: "Económicos", routerLink: ["pages/ecoIngresos"] },
    ]);
  }

  ngOnInit() {
    this.ecoIngreso$ = this.ecoIngresoService.getEcoIngreso();
    // Nombres columnas al exportar a .CSV.
    this.cols = [
      { field: "Codigo", header: "Codigo" },
      { field: "Descripcion", header: "Descripcion" },
      { field: "Observaciones", header: "Observaciones" },
      { field: "WEBOCM", header: "WEBOCM" },
    ];
  }

  openNew() {
    this.ecoIngreso = {};
    this.submitted = false;
    this.ecoIngresoDialog = true;
  }

  edit(ecoIngreso: EcoIngreso) {
    this.ecoIngreso = { ...ecoIngreso };
    this.ecoIngresoDialog = true;
  }

  detail(codEco: string, desEco: string) {
    this.ecoIngresoService.codEco = codEco;
    this.ecoIngresoService.desEco = desEco;
    this.router.navigate(["/pages/programaDetail"]);
  }

  hideDialog() {
    this.ecoIngresoDialog = false;
    this.submitted = false;
  }

}
