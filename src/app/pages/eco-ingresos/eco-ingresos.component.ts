import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { EcoIngreso } from "../../domain/eco-ingreso";
import { EcoIngresoService } from "../../service/ecoingresoservice";
import { ConfirmationService } from "primeng/api";
import { MessageService } from "primeng/api";
import { AppBreadcrumbService } from "../../app.breadcrumb.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-eco-ingresos',
  templateUrl: './eco-ingresos.component.html',
  styleUrls: ['./eco-ingresos.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class EcoIngresosComponent implements OnInit {
  ecoIngresoDialog: boolean;
  // programas: Organico[];
  ecoIngreso$: Observable<EcoIngreso[]>;

  ecoIngreso: EcoIngreso;
  selectedEcoIngreso: EcoIngreso[];
  submitted: boolean;
  cols: any[];

  constructor(
    private ecoIngresoService: EcoIngresoService,
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
    this.ecoIngreso$ = this.ecoIngresoService.getEcoIngreso();
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
