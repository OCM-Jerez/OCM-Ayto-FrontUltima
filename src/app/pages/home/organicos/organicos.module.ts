import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganicosComponent } from './organicos.component';

import { SharedFormModule } from '../../../../common/shared';
import { SharedTableModule } from '../../../../common/shared';

export const routes: Routes = [{ path: '', component: OrganicosComponent }]

@NgModule({
    declarations: [OrganicosComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedFormModule,
        SharedTableModule
    ],
})
export class OrganicosModule { }
