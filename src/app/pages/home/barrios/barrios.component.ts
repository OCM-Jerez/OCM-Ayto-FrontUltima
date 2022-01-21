import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Barrio } from "../../../domain/barrio";
import { BarrioService } from "../../../service/barrio.service";
import { ConfirmationService } from "primeng/api";
import { MessageService } from "primeng/api";
import { AppBreadcrumbService } from "../../../layout/breadcrumb/app.breadcrumb.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-barrio',
  templateUrl: './barrios.component.html',
  styleUrls: ['./barrios.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class BarriosComponent implements OnInit {
  _dialog: boolean;
  // programas: Organico[];
  _obs$: Observable<Barrio[]>;

  _obj: Barrio;
  _selected: Barrio[];
  submitted: boolean;
  cols: any[];

  constructor(
    private barrioService: BarrioService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
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
    this.barrioService.codEco = codEco;
    this.barrioService.desEco = desEco;
    this.router.navigate(["/pages/programaDetail"]);
  }

  hideDialog() {
    this._dialog = false;
    this.submitted = false;
  }

}
