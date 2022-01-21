import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Sindicato } from "../../../domain/sindicato";
import { SindicatoService } from "../../../service/sindicato.service";
import { ConfirmationService } from "primeng/api";
import { MessageService } from "primeng/api";
import { AppBreadcrumbService } from "../../../layout/breadcrumb/app.breadcrumb.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-sindicato',
  templateUrl: './sindicatos.component.html',
  styleUrls: ['./sindicatos.component.scss'],
  providers: [MessageService, ConfirmationService]
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
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
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
      // { field: 'inventoryStatus', header: 'Status' }
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