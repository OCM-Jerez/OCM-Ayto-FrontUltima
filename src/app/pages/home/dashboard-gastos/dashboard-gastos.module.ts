import { NgModule } from '@angular/core';
import { DashboardGastosComponent } from './dashboard-gastos.component';
import { CommonModule } from '@angular/common';
import { SharedFormModule } from '../../../../common/shared/shared-form.module';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';

import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [{ path: '', component: DashboardGastosComponent }]

@NgModule({
    declarations: [DashboardGastosComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedFormModule, ChartModule, MenuModule],
})
export class DashboardGastosModule { }
