import { ChartModule } from 'primeng/chart';
import { NgModule } from '@angular/core';
import { AppMainComponent } from './app-main.component';
import { CommonModule } from '@angular/common';

import { LayoutModule } from 'src/app/layout/layout.module';
import { AppMainRoutingodule } from './app-main-routing.module';
import { DashboardIngresosComponent } from './dashboard-ingresos/dashboard-ingresos.component';


@NgModule({

    declarations: [AppMainComponent, DashboardIngresosComponent],
    imports: [CommonModule, LayoutModule, AppMainRoutingodule, ChartModule],

})
export class AppMainModule { }
