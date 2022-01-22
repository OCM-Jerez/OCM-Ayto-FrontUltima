import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedFormModule } from '../../../../common/shared';
import { SharedTableModule } from '../../../../common/shared';

import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';

import { CapituloGastosComponent } from './capitulo-gastos.component';

export const routes: Routes = [{ path: '', component: CapituloGastosComponent }]

@NgModule({
    declarations: [CapituloGastosComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedFormModule,
        ChartModule,
        MenuModule,
        SharedTableModule
    ],
})
export class CapituloGastosModule { }
