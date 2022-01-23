import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcoIngresosComponent } from './eco-ingresos.component';

import { SharedFormModule } from '../../../../common/shared';
import { SharedTableModule } from '../../../../common/shared';

export const routes: Routes = [{ path: '', component: EcoIngresosComponent }]

@NgModule({
    declarations: [EcoIngresosComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedFormModule,
        SharedTableModule
    ],
})
export class EcoIngresosModule { }
