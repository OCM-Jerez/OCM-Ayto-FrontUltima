import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Ente } from "../../../domain/ente";
import { EnteService } from "../../../service/ente.service";
import { ConfirmationService } from "primeng/api";
import { MessageService } from "primeng/api";
import { AppBreadcrumbService } from "../../../layout/breadcrumb/app.breadcrumb.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-ente',
  templateUrl: './entes.component.html',
  styleUrls: ['./entes.component.scss'],
  providers: [MessageService, ConfirmationService]
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
    this._obs$ = this.enteService.getEnte();
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