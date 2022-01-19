import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppLoginComponent } from '../src/app/auth/login/app.login.component';
import { RegisterComponent } from '../src/app/auth/register/register.component';

const routes: Routes = [
  {
    path: '',
    // component: MainComponent,
    children: [
      { path: 'login', component: AppLoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '**', redirectTo: 'login' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
