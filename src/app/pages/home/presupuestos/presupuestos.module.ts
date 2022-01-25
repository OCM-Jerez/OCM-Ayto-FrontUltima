import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedFormModule, SharedTableModule } from '../../../../common/shared';
import { PresupuestosComponent } from './presupuestos.component';


export const routes: Routes = [{ path: '', component: PresupuestosComponent }]

@NgModule({
    declarations: [PresupuestosComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedFormModule,
        SharedTableModule
    ],
})
export class PresupuestosModule { }
