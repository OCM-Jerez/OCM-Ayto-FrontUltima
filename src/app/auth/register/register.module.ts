import { NgModule } from '@angular/core';
import { SharedFormModule } from 'src/common/shared/shared-form.module';

import { RegisterComponent } from './register.component';

import { RouterModule, Routes } from '@angular/router';

//auth/register/
export const routes: Routes = [{ path: "", component: RegisterComponent }]

@NgModule({
    declarations: [RegisterComponent],
    imports: [RouterModule.forChild(routes), SharedFormModule]
})
export class RegisterModule { }
