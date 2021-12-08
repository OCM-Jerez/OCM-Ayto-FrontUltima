import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";

import { AccordionModule } from "primeng/accordion";
import { AutoCompleteModule } from "primeng/autocomplete";
import { AvatarModule } from "primeng/avatar";
import { AvatarGroupModule } from "primeng/avatargroup";
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
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { ColorPickerModule } from "primeng/colorpicker";
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
import { InputNumberModule } from "primeng/inputnumber";
import { InputMaskModule } from "primeng/inputmask";
import { InputSwitchModule } from "primeng/inputswitch";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { KnobModule } from "primeng/knob";
import { LightboxModule } from "primeng/lightbox";
import { ListboxModule } from "primeng/listbox";
import { MegaMenuModule } from "primeng/megamenu";
import { MenuModule } from "primeng/menu";
import { MenubarModule } from "primeng/menubar";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { MultiSelectModule } from "primeng/multiselect";
import { OrderListModule } from "primeng/orderlist";
import { OrganizationChartModule } from "primeng/organizationchart";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { PaginatorModule } from "primeng/paginator";
import { PanelModule } from "primeng/panel";
import { PanelMenuModule } from "primeng/panelmenu";
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
import { TabMenuModule } from "primeng/tabmenu";
import { TableModule } from "primeng/table";
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

// import { AppCodeModule } from "./app.code.component";
import { AppComponent } from "./app.component";
import { AppMainComponent } from "./app.main.component";
import { AppConfigComponent } from "./app.config.component";
import { AppMenuComponent } from "./layout/menu/app.menu.component";
import { AppMenuitemComponent } from "./app.menuitem.component";
// import { AppInlineMenuComponent } from "./app.inlinemenu.component";
import { AppRightMenuComponent } from "./layout/rightmenu/app.rightmenu.component";
import { AppBreadcrumbComponent } from "./layout/breadcrumb/app.breadcrumb.component";
import { AppTopBarComponent } from "./layout/topbar/app.topbar.component";
import { AppFooterComponent } from "./layout/footer/app.footer.component";

import { AppProgramasComponent } from "./pages/programa/app.programas.component";
import { AppCalendarComponent } from "./pages/plantilla/app.calendar.component";
import { AppInvoiceComponent } from "./pages/plantilla/app.invoice.component";
import { AppHelpComponent } from "./pages/plantilla/app.help.component";
import { AppNotfoundComponent } from "./pages/plantilla/app.notfound.component";
import { AppErrorComponent } from "./pages/plantilla/app.error.component";
import { AppAccessdeniedComponent } from "./pages/plantilla/app.accessdenied.component";
import { AppLoginComponent } from "./pages/plantilla/app.login.component";
import { AppTimelineDemoComponent } from "./pages/plantilla/app.timelinedemo.component";
import { AppLandingComponent } from "./pages/plantilla/app.landing.component";

import { CountryService } from "./service/countryservice";
import { CustomerService } from "./service/customerservice";
import { EventService } from "./service/eventservice";
import { IconService } from "./service/iconservice";
import { NodeService } from "./service/nodeservice";
import { PhotoService } from "./service/photoservice";
import { ProgramaService } from "./service/programaservice";
import { ProductService } from "./service/productservice";

import { MenuService } from "./layout/menu/app.menu.service";
import { AppBreadcrumbService } from "./layout/breadcrumb/app.breadcrumb.service";
import { AppContactusComponent } from "./pages/plantilla/app.contactus.component";
import { ProgramaDetailComponent } from "./pages/programa-detail/programa-detail.component";
import { DashboardtiemposComponent } from "./pages/dashboardtiempos/dashboardtiempos.component";
import { DashboardAnalyticsComponent } from "./pages/dashboardgastos/dashboardanalytics.component";
import { DashboardComponent } from "./pages/dashboardingresos/dashboard.component";
import { HighchartsChartModule } from "highcharts-angular";
import { EcoGastosComponent } from './pages/eco-gastos/eco-gastos.component';
import { EcoGastoService } from "./service/ecogastoservice";
import { OrganicosComponent } from './pages/organicos/organicos.component';
import { OrganicoService } from "./service/organicoservice";
import { EcoIngresosComponent } from './pages/eco-ingresos/eco-ingresos.component';
import { EcoIngresoService } from "./service/ecoingresoservice";
import { CapituloIngresosComponent } from './pages/capitulo-ingresos/capitulo-ingresos.component';
import { CapituloIngresoService } from "./service/capitulo-ingreso.service";
import { CapituloGastoComponent } from './pages/capitulo-gasto/capitulo-gasto.component';
import { CapituloGastoService } from "./service/capitulo-gasto.service";
import { BarrioComponent } from './pages/barrio/barrio.component';
import { BarrioService } from "./service/barrio.service";
import { DelegacionComponent } from './pages/delegacion/delegacion.component';
import { DelegacionService } from "./service/delegacion.service";
import { DistritoComponent } from './pages/distrito/distrito.component';
import { DistritoService } from "./service/distrito.service";
import { EnteComponent } from './pages/ente/ente.component';
import { EnteService } from "./service/ente.service";
import { OrganoContratacionComponent } from './pages/organo-contratacion/organo-contratacion.component';
import { OrganoContratacionService } from "./service/organo-contratacion.service";
import { SeccionCensalComponent } from './pages/seccion-censal/seccion-censal.component';
import { SeccionCensalService } from "./service/seccion-censal.service";
import { SindicatoComponent } from './pages/sindicato/sindicato.component';
import { SindicatoService } from "./service/sindicato.service";
import { CuentaGeneralComponent } from './pages/cuenta-general/cuenta-general.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AccordionModule,
        AutoCompleteModule,
        AvatarModule,
        AvatarGroupModule,
        BadgeModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        CascadeSelectModule,
        ChartModule,
        CheckboxModule,
        ChipModule,
        ChipsModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        ColorPickerModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        DividerModule,
        DropdownModule,
        FieldsetModule,
        FileUploadModule,
        FullCalendarModule,
        GalleriaModule,
        InplaceModule,
        InputNumberModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        KnobModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        RippleModule,
        ScrollPanelModule,
        ScrollTopModule,
        SelectButtonModule,
        SidebarModule,
        SkeletonModule,
        SlideMenuModule,
        SliderModule,
        SplitButtonModule,
        SplitterModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TagModule,
        TerminalModule,
        TimelineModule,
        TieredMenuModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        VirtualScrollerModule,
        // AppCodeModule,
        HighchartsChartModule

    ],
    declarations: [
        AppAccessdeniedComponent,
        AppBreadcrumbComponent,
        AppCalendarComponent,
        AppComponent,
        AppConfigComponent,
        AppContactusComponent,
        AppErrorComponent,
        AppFooterComponent,
        AppHelpComponent,
        // AppInlineMenuComponent,
        AppInvoiceComponent,
        AppLandingComponent,
        AppLoginComponent,
        AppMainComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppNotfoundComponent,
        AppProgramasComponent,
        AppRightMenuComponent,
        AppTimelineDemoComponent,
        AppTopBarComponent,
        DashboardAnalyticsComponent,
        DashboardComponent,
        DashboardtiemposComponent,

        ProgramaDetailComponent,
        EcoGastosComponent,
        OrganicosComponent,
        EcoIngresosComponent,
        CapituloIngresosComponent,
        CapituloGastoComponent,
        BarrioComponent,
        DelegacionComponent,
        DistritoComponent,
        EnteComponent,
        OrganoContratacionComponent,
        SeccionCensalComponent,
        SindicatoComponent,
        CuentaGeneralComponent,
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService,
        CustomerService,
        EventService,
        IconService,
        NodeService,
        PhotoService,
        ProgramaService,
        ProductService,
        EcoGastoService,
        OrganicoService,
        EcoIngresoService,
        CapituloIngresoService,
        CapituloGastoService,
        BarrioService,
        DelegacionService,
        DistritoService,
        EnteService,
        OrganoContratacionService,
        SeccionCensalService,
        SindicatoService,
        MenuService,
        AppBreadcrumbService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
