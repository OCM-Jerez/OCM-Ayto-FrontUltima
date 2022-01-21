import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Delegacion } from "../../../domain/delegacion";
import { DelegacionService } from "../../../service/delegacion.service";
import { ConfirmationService } from "primeng/api";
import { MessageService } from "primeng/api";
import { AppBreadcrumbService } from "../../../layout/breadcrumb/app.breadcrumb.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-delegacion',
  templateUrl: './delegacion.component.html',
  styleUrls: ['./delegacion.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class DelegacionComponent implements OnInit {
  _dialog: boolean;
  _obs$: Observable<Delegacion[]>;

  _obj: Delegacion;
  _selected: Delegacion[];
  submitted: boolean;
  cols: any[];

  constructor(
    private delegacionService: DelegacionService,
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
    this._obs$ = this.delegacionService.getDelegacion();
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

  edit(_obj: Delegacion) {
    this._obj = { ..._obj };
    this._dialog = true;
  }

  detail(codEco: string, desEco: string) {
    this.delegacionService.codEco = codEco;
    this.delegacionService.desEco = desEco;
    this.router.navigate(["/pages/programaDetail"]);
  }

  hideDialog() {
    this._dialog = false;
    this.submitted = false;
  }

}
