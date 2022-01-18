import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { UserService } from '../../service/user.service';

import { LOGIN_VALIDATORS } from "./login.validators"

import { IloginUser, IResponseLogin } from "src/app/domain/user";

import Swal from 'sweetalert2';
import { SessionStorageService } from "../../../common/services/storage/storage.service"
import { SESSION_STORAGE_ENUM } from "src/common/utils/storage.enum";
@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
  styleUrls: ['./app.login.component.scss'],
})

export class AppLoginComponent {
  formGroup: FormGroup;
  private _user: IloginUser;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _sessionStorageService: SessionStorageService
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

    // const res = this._userService.login(this._user)
    //   .subscribe(
    //     async response => {
    //       if (response) this._router.navigate(['DashboardComponent']);
    //     },
    //     error => {
    //       // Si no existe el Usuario.
    //       Swal.fire('', `Usuario o password erroneo`, 'error');
    //     }
    //   )

    const res = this._userService.login(this._user)
      .subscribe(
        async response => {
          console.log('response', response);

          if (response) {

            // sessionStorage.setItem(SESSION_STORAGE_ENUM.TOKEN, JSON.stringify(response));
            this._sessionStorageService.setItem(SESSION_STORAGE_ENUM.USER_DATA, response);

            // const obj =JSON.parse(sessionStorage.getItem(SESSION_STORAGE_ENUM.TOKEN)) as IResponseLogin;

            // const obj2 = this._sessionStorageService.getItem<IResponseLogin>(SESSION_STORAGE_ENUM.TOKEN);

            this._router.navigate(['DashboardComponent']);

          } else {
            // Si no existe el Usuario.
            Swal.fire('', `Usuario o password erroneo`, 'error');
          }

        }
      )
  }

}