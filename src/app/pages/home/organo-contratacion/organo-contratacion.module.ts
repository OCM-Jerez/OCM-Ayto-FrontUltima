import { OrganoContratacion } from './../../../domain/organo-contratacion';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedFormModule } from '../../../../common/shared/shared-form.module';
import { SharedTableModule } from 'src/common/shared/shared-table.module';

import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { OrganoContratacionComponent } from './organo-contratacion.component';

export const routes: Routes = [{ path: '', component: OrganoContratacionComponent }]

@NgModule({
    declarations: [OrganoContratacionComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedFormModule, ChartModule, MenuModule, SharedTableModule],
})
export class OrganoContratacionModule { }
