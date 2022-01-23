import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutModule } from 'src/app/layout/layout.module';
import { AppMainRoutingodule } from './app-main-routing.module';

import { DashboardIngresosComponent } from './dashboard-ingresos/dashboard-ingresos.component';
import { AppMainComponent } from './app-main.component';

import { ChartModule } from 'primeng/chart';

@NgModule({
    declarations: [
        AppMainComponent,
        DashboardIngresosComponent
    ],
    imports: [
        AppMainRoutingodule,
        ChartModule,
        CommonModule,
        LayoutModule,
    ],
})
export class AppMainModule { }
