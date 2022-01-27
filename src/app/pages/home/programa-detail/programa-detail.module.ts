import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedDetailModule, SharedFormModule, SharedTableModule } from '@shared';
import { ProgramaDetailComponent } from './programa-detail.component';

export const routes: Routes = [{ path: '', component: ProgramaDetailComponent }]

@NgModule({
    declarations: [ProgramaDetailComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedFormModule,
        SharedTableModule,
        SharedDetailModule
    ],
})
export class ProgramaDetailModule { }
