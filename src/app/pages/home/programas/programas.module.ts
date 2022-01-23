import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedFormModule, SharedTableModule } from '@shared';
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
