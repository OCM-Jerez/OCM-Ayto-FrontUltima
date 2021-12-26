import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { ErrorInterceptor } from '../common/interceptors/error.interceptor';

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppConfigComponent } from "./app.config.component";
import { AppMainComponent } from "./app.main.component";
import { AppMenuitemComponent } from "./app.menuitem.component";

import { HighchartsChartModule } from "highcharts-angular";

import { AppLoginComponent } from "./auth/login/app.login.component";
import { RegisterComponent } from './auth/register/register.component';

import { AppBreadcrumbComponent } from "./layout/breadcrumb/app.breadcrumb.component";
import { AppBreadcrumbService } from "./layout/breadcrumb/app.breadcrumb.service";
import { AppFooterComponent } from "./layout/footer/app.footer.component";
import { AppMenuComponent } from "./layout/menu/app.menu.component";
import { AppRightMenuComponent } from "./layout/rightmenu/app.rightmenu.component";
import { AppTopBarComponent } from "./layout/topbar/app.topbar.component";
import { MenuService } from "./layout/menu/app.menu.service";

// import { ProgramaService } from "./service/programaservice";
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

import { CountryService } from "./service/countryservice";
import { CustomerService } from "./service/customerservice";
import { EventService } from "./service/eventservice";
import { IconService } from "./service/iconservice";
import { NodeService } from "./service/nodeservice";
import { PhotoService } from "./service/photoservice";
import { ProductService } from "./service/productservice";

// import { AppCodeModule } from "./app.code.component";
// import { AppInlineMenuComponent } from "./app.inlinemenu.component";
import { AppErrorComponent } from "./pages/error/app.error.component";
import { AppNotfoundComponent } from "./pages/404notFound/app.notfound.component";
import { AppProgramasComponent } from "./pages/programa/app.programas.component";
import { BarrioComponent } from './pages/barrio/barrio.component';
import { CapituloGastoComponent } from './pages/capitulo-gasto/capitulo-gasto.component';
import { CapituloIngresosComponent } from './pages/capitulo-ingresos/capitulo-ingresos.component';
import { CuentaGeneralComponent } from './pages/cuenta-general/cuenta-general.component';
import { DashboardAnalyticsComponent } from "./pages/dashboardgastos/dashboardanalytics.component";
import { DashboardComponent } from "./pages/dashboardingresos/dashboard.component";
import { DashboardtiemposComponent } from "./pages/dashboardtiempos/dashboardtiempos.component";
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

import { AccordionModule } from "primeng/accordion";
import { AutoCompleteModule } from "primeng/autocomplete";
import { AvatarGroupModule } from "primeng/avatargroup";
import { AvatarModule } from "primeng/avatar";
import { BadgeModule } from "primeng/badge";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { CardModule } from "primeng/card";
import { CarouselModule } from "primeng/carousel";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { ChartModule } from "primeng/chart";
import { CheckboxModule } from "primeng/checkbox";
import { ChipModule } from "primeng/chip";
import { ChipsModule } from "primeng/chips";
import { CodeHighlighterModule } from "primeng/codehighlighter";
import { ColorPickerModule } from "primeng/colorpicker";
import { ConfirmationService, MessageService } from "primeng/api";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { ContextMenuModule } from "primeng/contextmenu";
import { DataViewModule } from "primeng/dataview";
import { DialogModule } from "primeng/dialog";
import { DividerModule } from "primeng/divider";
import { DropdownModule } from "primeng/dropdown";
import { FieldsetModule } from "primeng/fieldset";
import { FileUploadModule } from "primeng/fileupload";
import { FullCalendarModule } from "primeng/fullcalendar";
import { GalleriaModule } from "primeng/galleria";
import { InplaceModule } from "primeng/inplace";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { InputSwitchModule } from "primeng/inputswitch";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { KnobModule } from "primeng/knob";
import { LightboxModule } from "primeng/lightbox";
import { ListboxModule } from "primeng/listbox";
import { MegaMenuModule } from "primeng/megamenu";
import { MenubarModule } from "primeng/menubar";
import { MenuModule } from "primeng/menu";
import { MessageModule } from "primeng/message";
import { MessagesModule } from "primeng/messages";
import { MultiSelectModule } from "primeng/multiselect";
import { OrderListModule } from "primeng/orderlist";
import { OrganizationChartModule } from "primeng/organizationchart";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { PaginatorModule } from "primeng/paginator";
import { PanelMenuModule } from "primeng/panelmenu";
import { PanelModule } from "primeng/panel";
import { PasswordModule } from "primeng/password";
import { PickListModule } from "primeng/picklist";
import { ProgressBarModule } from "primeng/progressbar";
import { RadioButtonModule } from "primeng/radiobutton";
import { RatingModule } from "primeng/rating";
import { RippleModule } from "primeng/ripple";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { ScrollTopModule } from "primeng/scrolltop";
import { SelectButtonModule } from "primeng/selectbutton";
import { SidebarModule } from "primeng/sidebar";
import { SkeletonModule } from "primeng/skeleton";
import { SlideMenuModule } from "primeng/slidemenu";
import { SliderModule } from "primeng/slider";
import { SplitButtonModule } from "primeng/splitbutton";
import { SplitterModule } from "primeng/splitter";
import { StepsModule } from "primeng/steps";
import { TableModule } from "primeng/table";
import { TabMenuModule } from "primeng/tabmenu";
import { TabViewModule } from "primeng/tabview";
import { TagModule } from "primeng/tag";
import { TerminalModule } from "primeng/terminal";
import { TieredMenuModule } from "primeng/tieredmenu";
import { TimelineModule } from "primeng/timeline";
import { ToastModule } from "primeng/toast";
import { ToggleButtonModule } from "primeng/togglebutton";
import { ToolbarModule } from "primeng/toolbar";
import { TooltipModule } from "primeng/tooltip";
import { TreeModule } from "primeng/tree";
import { TreeTableModule } from "primeng/treetable";
import { VirtualScrollerModule } from "primeng/virtualscroller";

@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,

        AppRoutingModule,

        HighchartsChartModule,

        BreadcrumbModule,
        ChartModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        DialogModule,
        InputTextareaModule,
        InputTextModule,
        MenubarModule,
        MenuModule,
        SidebarModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TimelineModule,
        ToastModule,
        ToolbarModule,


        // AccordionModule,
        // AutoCompleteModule,
        // AvatarGroupModule,
        // AvatarModule,
        // BadgeModule,
        // ButtonModule,
        // CalendarModule,
        // CardModule,
        // CarouselModule,
        // CascadeSelectModule,
        // CheckboxModule,
        // ChipModule,
        // ChipsModule,
        // CodeHighlighterModule,
        // ColorPickerModule,
        // ContextMenuModule,
        // DataViewModule,
        // DividerModule,
        // DropdownModule,
        // FieldsetModule,
        // FileUploadModule,
        // FullCalendarModule,
        // GalleriaModule,
        // InplaceModule,
        // InputMaskModule,
        // InputNumberModule,
        // InputSwitchModule,
        // KnobModule,
        // LightboxModule,
        // ListboxModule,
        // MegaMenuModule,
        // MessageModule,
        // MessagesModule,
        // MultiSelectModule,
        // OrderListModule,
        // OrganizationChartModule,
        // OverlayPanelModule,
        // PaginatorModule,
        // PanelMenuModule,
        // PanelModule,
        // PasswordModule,
        // PickListModule,
        // ProgressBarModule,
        // RadioButtonModule,
        // RatingModule,
        // RippleModule,
        // ScrollPanelModule,
        // ScrollTopModule,
        // SelectButtonModule,
        // SkeletonModule,
        // SlideMenuModule,
        // SliderModule,
        // SplitButtonModule,
        // SplitterModule,
        // StepsModule,
        // TagModule,
        // TerminalModule,
        // TieredMenuModule,
        // ToggleButtonModule,
        // TooltipModule,
        // TreeModule,
        // TreeTableModule,
        // VirtualScrollerModule,
        // AppCodeModule,
    ],
    declarations: [
        AppProgramasComponent,
        AppRightMenuComponent,
        AppTopBarComponent,
        BarrioComponent,
        CapituloGastoComponent,
        CapituloIngresosComponent,
        CuentaGeneralComponent,
        DashboardAnalyticsComponent,
        DashboardComponent,
        DashboardtiemposComponent,
        DelegacionComponent,
        DistritoComponent,
        EcoGastosComponent,
        EcoIngresosComponent,
        EnteComponent,
        OrganicosComponent,
        OrganoContratacionComponent,
        ProgramaDetailComponent,
        RegisterComponent,
        SeccionCensalComponent,
        SindicatoComponent,

        AppBreadcrumbComponent,
        AppComponent,
        AppConfigComponent,
        AppErrorComponent,
        AppFooterComponent,
        AppLoginComponent,
        AppMainComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppNotfoundComponent,
    ],
    providers: [
        // ProgramaService,
        BarrioService,
        CapituloGastoService,
        CapituloIngresoService,
        CustomerService,
        DelegacionService,
        DistritoService,
        EcoGastoService,
        EcoIngresoService,
        EnteService,
        OrganicoService,
        OrganoContratacionService,
        SeccionCensalService,
        SindicatoService,

        AppBreadcrumbService,
        // CountryService,
        EventService,
        IconService,
        MenuService,
        // NodeService,
        // PhotoService,
        ProductService,
        MessageService,
        ConfirmationService,

        { provide: LocationStrategy, useClass: HashLocationStrategy },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
