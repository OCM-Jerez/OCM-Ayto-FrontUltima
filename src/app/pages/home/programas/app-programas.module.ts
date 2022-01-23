import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedFormModule } from '../../../../common/shared';
import { SharedTableModule } from '../../../../common/shared';

import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';

import { AppProgramasComponent } from './app.programas.component';

export const routes: Routes = [{ path: '', component: AppProgramasComponent }]

@NgModule({
    declarations: [AppProgramasComponent],
    imports: [
        ChartModule,
        CommonModule,
        MenuModule,
        RouterModule.forChild(routes),
        SharedFormModule,
        SharedTableModule
    ],
})
export class AppProgramasModule { }
