import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { LayoutModule } from 'src/app/layout/layout.module';
import { AppMainRoutingodule } from './app-main-routing.module';
import { AppMainComponent } from './app-main.component';
import { DashboardIngresosComponent } from './dashboard-ingresos/dashboard-ingresos.component';




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
