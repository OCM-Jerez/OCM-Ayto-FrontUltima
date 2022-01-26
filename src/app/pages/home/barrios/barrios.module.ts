import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedFormModule, SharedTableModule } from '@shared';
import { BarriosComponent } from './barrios.component';


export const routes: Routes = [{ path: '', component: BarriosComponent }]

@NgModule({
    declarations: [BarriosComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedFormModule,
        SharedTableModule
    ],
})
export class BarriosModule { }
