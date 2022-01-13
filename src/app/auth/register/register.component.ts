import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
// import { Router } from "@angular/router";

import Swal from 'sweetalert2';

import { mustMatch, REGISTER_VALIDATORS, identityRevealedValidator } from "./REGISTER.validators"
import { IregisterUser, IUser } from '../../domain/user';
import { UserService } from "src/app/service/user.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
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
export class RegisterComponent {
  formGroup: FormGroup;
  private _user: IregisterUser;

  constructor(
    private _userService: UserService,
    // private _router: Router,
    private _formBuilder: FormBuilder,
  ) {
    this._loadForm();
  }

  private _loadForm(): void {
    this.formGroup = this._formBuilder.group(
      {
        user: ['mamapp7', [Validators.required, Validators.minLength(5)]],
        password: ['1234546', [Validators.required, Validators.minLength(6)]],
        // NO se como pasar el valor del campo password
        // passwordConfirm: ['1234546', [Validators.required, Validators.minLength(6), mustMatch(this.formGroup.value.password)]],
        passwordConfirm: ['1234546', [Validators.required, Validators.minLength(6)]],
      },
      { validators: identityRevealedValidator }
    );
  }

  getError(controlName: string): string {
    const control = this.formGroup.get(controlName)
    if (control?.invalid && control?.touched) {
      const atributeError = REGISTER_VALIDATORS.find((x) => x.formControlName == controlName);
      const validator = atributeError?.validators.find(
        (validator) => control.errors![validator.name]
      );
      return validator!.message;
    }
    return '';
  }

  register() {
    this._user = {
      "login": this.formGroup.value.user,
      "password": this.formGroup.value.password
    }

    const res = this._userService.loginExist(this._user)
      .subscribe(
        response => {
          Swal.fire('', `El usuario ${this._user.login} ya existe`, 'error');
        },
        error => {
          // Si no existe el Usuario, guardarlo en BBDD.
          this._userService.postUser(this._user)
            .subscribe(response => {
              Swal.fire('', `El usuario ${this._user.login} ha sido creado correctamente`, 'success');
            },
              error => {
                // TODO: Mejorar respuesta de error
                Swal.fire('', `Error ${error.message}`, 'error');
              }
            );
        }
      )
  }

}