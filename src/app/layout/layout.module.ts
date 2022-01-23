import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppBreadcrumbComponent } from './breadcrumb/app.breadcrumb.component';
import { AppFooterComponent } from './footer/app.footer.component';
import { AppMenuComponent } from './menu/app.menu.component';
import { AppRightMenuComponent } from './rightmenu/app.rightmenu.component';
import { AppTopBarComponent } from './topbar/app.topbar.component';
import { AppConfigComponent } from './config/app-config.component';
import { AppMenuitemComponent } from './menu/app.menuitem.component';

import { BreadcrumbModule } from "primeng/breadcrumb";
import { InputSwitchModule } from 'primeng/inputswitch';
import { MenuModule } from 'primeng/menu';
import { OverlayPanelModule } from "primeng/overlaypanel";
import { PanelMenuModule } from "primeng/panelmenu";
import { PanelModule } from "primeng/panel";
import { SharedFormModule } from 'src/common/shared/shared-form.module';
import { SidebarModule } from "primeng/sidebar";
import { TooltipModule } from 'primeng/tooltip';

import { AppBreadcrumbService } from './breadcrumb/app.breadcrumb.service';
import { MenuService } from './menu/app.menu.service';

@NgModule({
    declarations: [
        AppBreadcrumbComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppRightMenuComponent,
        AppMenuitemComponent,
        AppTopBarComponent,
        AppConfigComponent,
    ],
    imports: [
        BreadcrumbModule,
        CommonModule,
        InputSwitchModule,
        MenuModule,
        OverlayPanelModule,
        PanelMenuModule,
        PanelModule,
        SharedFormModule,
        SidebarModule,
        TooltipModule,
    ],
    exports: [
        AppBreadcrumbComponent,
        AppConfigComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppRightMenuComponent,
        AppTopBarComponent,
    ],
    providers: [
        AppBreadcrumbService,
        MenuService,
    ],
})
export class LayoutModule { }
