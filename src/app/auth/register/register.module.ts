import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedFormModule } from '../../../common/shared/shared-form.module';

import { RegisterComponent } from './register.component';

//auth/register/
export const routes: Routes = [{ path: "", component: RegisterComponent }]

@NgModule({
    declarations: [RegisterComponent],
    imports: [
        RouterModule.forChild(routes),
        SharedFormModule
    ]
})
export class RegisterModule { }
