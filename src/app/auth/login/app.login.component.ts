import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { UserService } from '../../service/user.service';

import { LOGIN_VALIDATORS } from "./login.validators"

import { IloginUser } from "../../domain/user";

import { SessionStorageService } from "../../../common/services/storage/storage.service"
import { SESSION_STORAGE_ENUM } from "../../../common/utils/storage.enum";

import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
  styleUrls: ['./app.login.component.scss'],
})

export class AppLoginComponent {
  formGroup: FormGroup;
  private _user: IloginUser;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _sessionStorageService: SessionStorageService,
    private _userService: UserService,
  ) {
    this._loadForm();
  }

  private _loadForm(): void {
    this.formGroup = this._formBuilder.group(
      {
        user: ['mamq', [Validators.required, Validators.minLength(3)]],
        password: ['mam', [Validators.required, Validators.minLength(3)]],
      }
    )
  }

  getError(controlName: string): string {
    const control = this.formGroup.get(controlName)
    if (control?.invalid && control?.touched) {
      const atributeError = LOGIN_VALIDATORS.find((x) => x.formControlName == controlName);
      const validator = atributeError?.validators.find(
        (validator) => control.errors![validator.name]
      );
      return validator!.message;
    }
    return '';
  }

  login() {
    this._user = {
      "login": this.formGroup.value.user,
      "password": this.formGroup.value.password
    }

    const res = this._userService.login(this._user)
      .subscribe(
        async response => {
          if (response.token !== '') {
            this._sessionStorageService.setItem(SESSION_STORAGE_ENUM.USER_DATA, response);
            // this._router.navigate(['DashboardIngresos']);
            this._router.navigateByUrl("/")
          } else {
            Swal.fire('', `Usuario o password erroneo`, 'error');
          }

        }
      )
  }

}