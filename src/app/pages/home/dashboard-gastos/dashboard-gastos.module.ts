import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardGastosComponent } from './dashboard-gastos.component';
import { SharedFormModule } from '../../../../common/shared';

import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';

export const routes: Routes = [{ path: '', component: DashboardGastosComponent }]

@NgModule({
    declarations: [DashboardGastosComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedFormModule,
        ChartModule,
        MenuModule
    ],
})
export class DashboardGastosModule { }
