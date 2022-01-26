import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ConfirmationService, MessageService } from 'primeng/api';
import { BreadcrumbModule } from "primeng/breadcrumb";
import { ChartModule } from "primeng/chart";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { ContextMenuModule } from "primeng/contextmenu";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { InputSwitchModule } from "primeng/inputswitch";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { MegaMenuModule } from "primeng/megamenu";
import { MenuModule } from "primeng/menu";
import { MenubarModule } from "primeng/menubar";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { PanelModule } from "primeng/panel";
import { PanelMenuModule } from "primeng/panelmenu";
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
import { ApiInterceptor } from '../common/interceptors/api.interceptor';
import { ErrorInterceptor } from '../common/interceptors/error.interceptor';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppLoginComponent } from "./auth/login/app.login.component";
import { AppNotfoundComponent } from "./pages/404notFound/app.notfound.component";
import { AppErrorComponent } from "./pages/error/app.error.component";
import { ProgramaDetailComponent } from "./pages/home/programa-detail/programa-detail.component";
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
        MessageService,
        ConfirmationService,
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
