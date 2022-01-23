import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentaGeneralComponent } from './cuenta-general.component';

import { SharedFormModule } from '../../../../common/shared';
import { SharedTableModule } from '../../../../common/shared';

export const routes: Routes = [{ path: '', component: CuentaGeneralComponent }]

@NgModule({
    declarations: [CuentaGeneralComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedFormModule,
        SharedTableModule
    ],
})
export class CuentaGeneralModule { }
