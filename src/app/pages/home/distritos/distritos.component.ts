import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Distrito } from "../../../domain/distrito";
import { DistritoService } from "../../../service/distrito.service";
import { ConfirmationService } from "primeng/api";
import { MessageService } from "primeng/api";
import { AppBreadcrumbService } from "../../../layout/breadcrumb/app.breadcrumb.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-distrito',
  templateUrl: './distritos.component.html',
  styleUrls: ['./distritos.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class DistritosComponent implements OnInit {
  _dialog: boolean;
  _obs$: Observable<Distrito[]>;

  _obj: Distrito;
  _selected: Distrito[];
  submitted: boolean;
  cols: any[];

  constructor(
    private distritoService: DistritoService,
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
    this._obs$ = this.distritoService.getDistrito();
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

  edit(_obj: Distrito) {
    this._obj = { ..._obj };
    this._dialog = true;
  }

  detail(codEco: string, desEco: string) {
    this.distritoService.codEco = codEco;
    this.distritoService.desEco = desEco;
    this.router.navigate(["/pages/programaDetail"]);
  }

  hideDialog() {
    this._dialog = false;
    this.submitted = false;
  }

}
