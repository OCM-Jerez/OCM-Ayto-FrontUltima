import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AppLoginComponent } from '../src/app/auth/login/app.login.component';
import { RegisterComponent } from '../src/app/auth/register/register.component';
// import { MainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [
    // MainComponent,
    // AppLoginComponent,
    // RegisterComponent
  ],

  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
