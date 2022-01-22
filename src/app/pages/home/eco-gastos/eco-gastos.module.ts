import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedFormModule } from '../../../../common/shared';
import { SharedTableModule } from '../../../../common/shared';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';

import { EcoGastosComponent } from './eco-gastos.component';

export const routes: Routes = [{ path: '', component: EcoGastosComponent }]

@NgModule({
    declarations: [EcoGastosComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedFormModule,
        ChartModule,
        MenuModule,
        SharedTableModule
    ],
})
export class EcoGastosModule { }
