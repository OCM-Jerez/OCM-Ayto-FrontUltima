import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedFormModule, SharedTableModule } from '../../../../common/shared';
import { CapituloGastosComponent } from './capitulo-gastos.component';


export const routes: Routes = [{ path: '', component: CapituloGastosComponent }]

@NgModule({
    declarations: [CapituloGastosComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedFormModule,
        SharedTableModule
    ],
})
export class CapituloGastosModule { }
