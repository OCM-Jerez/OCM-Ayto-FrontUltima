import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardtiemposComponent } from './dashboard-tiempos.component';
import { SharedFormModule } from '../../../../common/shared/shared-form.module';

import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { HighchartsChartModule } from 'highcharts-angular';

export const routes: Routes = [{ path: '', component: DashboardtiemposComponent }]

@NgModule({
    declarations: [DashboardtiemposComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedFormModule, HighchartsChartModule, MenuModule],
})
export class DashboardtiemposModule { }
