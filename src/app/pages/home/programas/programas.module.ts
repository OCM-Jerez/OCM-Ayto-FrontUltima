import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedFormModule } from '../../../../common/shared';
import { SharedTableModule } from '../../../../common/shared';

import { ProgramasComponent } from './programas.component';

export const routes: Routes = [{ path: '', component: ProgramasComponent }]

@NgModule({
    declarations: [ProgramasComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedFormModule,
        SharedTableModule
    ],
})
export class ProgramasModule { }
