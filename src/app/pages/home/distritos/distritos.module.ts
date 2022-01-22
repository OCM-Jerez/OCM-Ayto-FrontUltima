import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedFormModule } from '../../../../common/shared';
import { SharedTableModule } from '../../../../common/shared';

import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';

import { DistritosComponent } from './distritos.component';

export const routes: Routes = [{ path: '', component: DistritosComponent }]

@NgModule({
    declarations: [DistritosComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedFormModule,
        ChartModule,
        MenuModule,
        SharedTableModule
    ],
})
export class DistritosModule { }
