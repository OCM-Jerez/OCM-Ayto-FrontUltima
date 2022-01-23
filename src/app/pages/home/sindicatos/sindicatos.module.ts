import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SindicatosComponent } from './sindicatos.component';

import { SharedFormModule } from '../../../../common/shared';
import { SharedTableModule } from '../../../../common/shared';

export const routes: Routes = [{ path: '', component: SindicatosComponent }]

@NgModule({
    declarations: [SindicatosComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedFormModule,
        SharedTableModule
    ],
})
export class SindicatosModule { }
