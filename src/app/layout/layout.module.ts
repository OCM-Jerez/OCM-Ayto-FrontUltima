import { AppBreadcrumbComponent } from './breadcrumb/app.breadcrumb.component';




import { TooltipModule } from 'primeng/tooltip';
import { InputSwitchModule } from 'primeng/inputswitch';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from 'primeng/menu';
import { AppBreadcrumbService } from './breadcrumb/app.breadcrumb.service';
import { AppFooterComponent } from './footer/app.footer.component';
import { AppMenuComponent } from './menu/app.menu.component';
import { AppRightMenuComponent } from './rightmenu/app.rightmenu.component';
import { AppTopBarComponent } from './topbar/app.topbar.component';
import { SidebarModule } from "primeng/sidebar";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { MenuService } from './menu/app.menu.service';
import { AppConfigComponent } from './config/app-config.component';

import { OverlayPanelModule } from "primeng/overlaypanel";
import { PanelMenuModule } from "primeng/panelmenu";
import { PanelModule } from "primeng/panel";
import { SharedFormModule } from 'src/common/shared/shared-form.module';
import { AppMenuitemComponent } from './menu/app.menuitem.component';
@NgModule({
    declarations: [
        AppBreadcrumbComponent,
        AppFooterComponent,
        AppMenuComponent, AppRightMenuComponent,
        AppTopBarComponent, AppConfigComponent,
        AppMenuitemComponent
    ],
    imports: [
        CommonModule,
        SharedFormModule,
        SidebarModule,
        BreadcrumbModule,
        MenuModule,
        InputSwitchModule,
        OverlayPanelModule,
        PanelMenuModule,
        PanelModule,
        TooltipModule
    ],
    exports: [
        AppBreadcrumbComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppRightMenuComponent,
        AppTopBarComponent,
        AppConfigComponent
    ],
    providers: [
        AppBreadcrumbService,
        MenuService,
    ],
})
export class LayoutModule { }
