import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { ErrorInterceptor } from '../common/interceptors/error.interceptor';

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { AppLoginComponent } from "./auth/login/app.login.component";

import { AppErrorComponent } from "./pages/error/app.error.component";
import { AppNotfoundComponent } from "./pages/404notFound/app.notfound.component";
import { ProgramaDetailComponent } from "./pages/programa-detail/programa-detail.component";

import { BreadcrumbModule } from "primeng/breadcrumb";
import { ChartModule } from "primeng/chart";
import { ConfirmationService, MessageService } from "primeng/api";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { ContextMenuModule } from "primeng/contextmenu";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { InputSwitchModule } from "primeng/inputswitch";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { MegaMenuModule } from "primeng/megamenu";
import { MenubarModule } from "primeng/menubar";
import { MenuModule } from "primeng/menu";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { PanelMenuModule } from "primeng/panelmenu";
import { PanelModule } from "primeng/panel";
import { RadioButtonModule } from "primeng/radiobutton";
import { SelectButtonModule } from "primeng/selectbutton";
import { SidebarModule } from "primeng/sidebar";
import { SlideMenuModule } from "primeng/slidemenu";
import { SliderModule } from "primeng/slider";
import { SplitButtonModule } from "primeng/splitbutton";
import { TableModule } from "primeng/table";
import { TabMenuModule } from "primeng/tabmenu";
import { TabViewModule } from "primeng/tabview";
import { TimelineModule } from "primeng/timeline";
import { ToastModule } from "primeng/toast";
import { ToggleButtonModule } from "primeng/togglebutton";
import { ToolbarModule } from "primeng/toolbar";
import { TooltipModule } from "primeng/tooltip";

import { BarrioService } from "./service/barrio.service";
import { CapituloGastoService } from "./service/capitulo-gasto.service";
import { CapituloIngresoService } from "./service/capitulo-ingreso.service";
import { DelegacionService } from "./service/delegacion.service";
import { DistritoService } from "./service/distrito.service";
import { EcoGastoService } from "./service/eco-gasto.service";
import { EcoIngresoService } from "./service/eco-ingreso.service";
import { EnteService } from "./service/ente.service";
import { OrganicoService } from "./service/organico.service";
import { OrganoContratacionService } from "./service/organo-contratacion.service";
import { SeccionCensalService } from "./service/seccion-censal.service";
import { SindicatoService } from "./service/sindicato.service";

import { ApiInterceptor } from '../common/interceptors/api.interceptor';

@NgModule({
    imports: [
        AppRoutingModule,
        BreadcrumbModule,
        BrowserAnimationsModule,
        BrowserModule,
        ChartModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        ContextMenuModule,
        DialogModule,
        DropdownModule,
        FormsModule,
        HttpClientModule,
        InputSwitchModule,
        InputTextareaModule,
        InputTextModule,
        MegaMenuModule,
        MenubarModule,
        MenuModule,
        OverlayPanelModule,
        PanelMenuModule,
        PanelModule,
        RadioButtonModule,
        ReactiveFormsModule,
        SelectButtonModule,
        SidebarModule,
        SlideMenuModule,
        SliderModule,
        SplitButtonModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TimelineModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
    ],
    declarations: [
        AppComponent,
        AppErrorComponent,
        AppLoginComponent,
        AppNotfoundComponent,
        ProgramaDetailComponent,
    ],
    providers: [
        BarrioService,
        CapituloGastoService,
        CapituloIngresoService,
        ConfirmationService,
        DelegacionService,
        DistritoService,
        EcoGastoService,
        EcoIngresoService,
        EnteService,
        MessageService,
        OrganicoService,
        OrganoContratacionService,
        SeccionCensalService,
        SindicatoService,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
