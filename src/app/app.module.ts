import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { ErrorInterceptor } from '../common/interceptors/error.interceptor';

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
// import { AppCodeModule } from "../../obsoletos/app.code.component";

import { HighchartsChartModule } from "highcharts-angular";

import { AppLoginComponent } from "./auth/login/app.login.component";

import { AppErrorComponent } from "./pages/error/app.error.component";
import { AppNotfoundComponent } from "./pages/404notFound/app.notfound.component";
import { AppProgramasComponent } from "./pages/programa/app.programas.component";
import { BarrioComponent } from './pages/barrio/barrio.component';
import { CapituloGastoComponent } from './pages/capitulo-gasto/capitulo-gasto.component';
import { CapituloIngresosComponent } from './pages/capitulo-ingresos/capitulo-ingresos.component';
import { CuentaGeneralComponent } from './pages/cuenta-general/cuenta-general.component';
import { DashboardtiemposComponent } from "./pages/dashboard-tiempos/dashboard-tiempos.component";
import { DelegacionComponent } from './pages/delegacion/delegacion.component';
import { DistritoComponent } from './pages/distrito/distrito.component';
import { EcoGastosComponent } from './pages/eco-gastos/eco-gastos.component';
import { EcoIngresosComponent } from './pages/eco-ingresos/eco-ingresos.component';
import { EnteComponent } from './pages/ente/ente.component';
import { OrganicosComponent } from './pages/organicos/organicos.component';
import { OrganoContratacionComponent } from './pages/organo-contratacion/organo-contratacion.component';
import { ProgramaDetailComponent } from "./pages/programa-detail/programa-detail.component";
import { SeccionCensalComponent } from './pages/seccion-censal/seccion-censal.component';
import { SindicatoComponent } from './pages/sindicato/sindicato.component';

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

// import { CustomerService } from "../../obsoletos/sevices/customerservice";
// import { EventService } from "./service/eventservice";
// import { IconService } from "../../obsoletos/service/iconservice";

import { BarrioService } from "./service/barrio.service";
import { CapituloGastoService } from "./service/capitulo-gasto.service";
import { CapituloIngresoService } from "./service/capitulo-ingreso.service";
import { DelegacionService } from "./service/delegacion.service";
import { DistritoService } from "./service/distrito.service";
import { EcoGastoService } from "./service/ecogastoservice";
import { EcoIngresoService } from "./service/ecoingresoservice";
import { EnteService } from "./service/ente.service";
import { OrganicoService } from "./service/organicoservice";
import { OrganoContratacionService } from "./service/organo-contratacion.service";
import { SeccionCensalService } from "./service/seccion-censal.service";
import { SindicatoService } from "./service/sindicato.service";

import { ApiInterceptor } from '../common/interceptors/api.interceptor';

@NgModule({
    imports: [
        // AppCodeModule,
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
        HighchartsChartModule,
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
        AppProgramasComponent,
        BarrioComponent,
        CapituloGastoComponent,
        CapituloIngresosComponent,
        CuentaGeneralComponent,
        DashboardtiemposComponent,
        DelegacionComponent,
        DistritoComponent,
        EcoGastosComponent,
        EcoIngresosComponent,
        EnteComponent,
        OrganicosComponent,
        OrganoContratacionComponent,
        ProgramaDetailComponent,
        SeccionCensalComponent,
        SindicatoComponent,
    ],
    providers: [
        BarrioService,
        CapituloGastoService,
        CapituloIngresoService,
        ConfirmationService,
        // CustomerService,
        DelegacionService,
        DistritoService,
        EcoGastoService,
        EcoIngresoService,
        EnteService,
        // EventService,
        // IconService,

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
