import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedFormModule } from '../../../../common/shared/shared-form.module';
import { SharedTableModule } from 'src/common/shared/shared-table.module';

import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { SeccionCensalComponent } from './seccion-censal.component';

export const routes: Routes = [{ path: '', component: SeccionCensalComponent }]

@NgModule({
    declarations: [SeccionCensalComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedFormModule, ChartModule, MenuModule, SharedTableModule],
})
export class SeccionCensalModule { }
