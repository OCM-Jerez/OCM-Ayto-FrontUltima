import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import Swal from 'sweetalert2';

import { customValidator, LOGIN_VALIDATORS } from "./login.validators"
import { UserService } from '../../service/user.service';

import { IregisterUser } from "src/app/domain/user";

@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
  styles: [
    `
            :host ::ng-deep .p-dialog .product-image {
                width: 150px;
                margin: 0 auto 2rem auto;
                display: block;
            }

            @media screen and (max-width: 960px) {
                :host
                    ::ng-deep
                    .p-datatable.p-datatable-customers
                    .p-datatable-tbody
                    > tr
                    > td:last-child {
                    text-align: center;
                }

                :host
                    ::ng-deep
                    .p-datatable.p-datatable-customers
                    .p-datatable-tbody
                    > tr
                    > td:nth-child(6) {
                    display: flex;
                }
            }
        `,
  ],

})
export class AppLoginComponent {
  miError: string = '';
  formGroup: FormGroup;
  private _user: IregisterUser;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _formBuilder: FormBuilder,
  ) {
    this._loadForm();
  }

  private _loadForm(): void {
    this.formGroup = this._formBuilder.group(
      {
        // user: ['12345', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(5), customValidator()]],
        user: ['mamapp10', [Validators.required, Validators.minLength(5)]],
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

    // console.log(this.formGroup.value);
    // const { user, password } = this.formGroup.value;
    // const userLogin: any = { user, password }
    // console.log(userLogin);

    const res = this._userService.loginExist(this._user)
      .subscribe(
        async response => {
          // await Swal.fire('', `El usuario ${this._user.login} existe`, 'success');
          this.passwordExist(true)
        },
        async error => {
          // Si no existe el Usuario.
          // await Swal.fire('', `El usuario ${this._user.login} no existe en la base de datos`, 'error');
          this.passwordExist(false)
        }
      )
  }

  passwordExist(usuarioExist: boolean) {
    const res1 = this._userService.passwordExist(this._user)
      .subscribe(
        async response => {
          // await Swal.fire('', `El password ${this._user.password} existe`, 'success');
          if (usuarioExist) {
            this._router.navigate(['/favorites/dashboardanalytics']);
          } else {
            Swal.fire('', `Usuario o password erroneo`, 'error');
          }
        },
        error => {
          // Si no existe el password.
          // Swal.fire('', `El password ${this._user.password} no existe en la base de datos`, 'error');
          Swal.fire('', `Usuario o password erroneo`, 'error');
        }
      )
  }

  loginNew() {
    console.log("loginNew");

    this._user = {
      "login": this.formGroup.value.user,
      "password": this.formGroup.value.password
    }

    const res = this._userService.login(this._user)
      .subscribe(
        async response => {
          console.log(response);
          if (response) {
            this._router.navigate(['/favorites/dashboardanalytics']);
          } else {
            Swal.fire('', `Usuario o password erroneo`, 'error');
          }
        },
        error => {
          // Si no existe el Usuario.
          Swal.fire('', `Usuario o password erroneo`, 'error');

        }
      )
  }

}