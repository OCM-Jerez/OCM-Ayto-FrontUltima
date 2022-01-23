import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeccionCensalComponent } from './seccion-censal.component';

import { SharedFormModule } from '../../../../common/shared';
import { SharedTableModule } from '../../../../common/shared';

export const routes: Routes = [{ path: '', component: SeccionCensalComponent }]

@NgModule({
    declarations: [SeccionCensalComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedFormModule,
        SharedTableModule
    ],
})
export class SeccionCensalModule { }
