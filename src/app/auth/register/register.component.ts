import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import Swal from 'sweetalert2';

import { mustMatch, REGISTER_VALIDATORS } from "./REGISTER.validators"

import { IloginUser, IUser } from '../../domain/user';
import { UserService } from "../../service/user.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent {
  formGroup: FormGroup;
  private _user: IloginUser;

  constructor(
    private _userService: UserService,
    private _formBuilder: FormBuilder,
  ) {
    this._loadForm();
  }

  private _loadForm(): void {
    this.formGroup = this._formBuilder.group(
      {
        login: ['mam', [Validators.required, Validators.minLength(3)]],
        password: ['mam', [Validators.required, Validators.minLength(3), mustMatch('password')]],
        passwordConfirm: ['mam', [Validators.required, Validators.minLength(3), mustMatch('passwordConfirm')]],
      }
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
      "login": this.formGroup.value.login,
      "password": this.formGroup.value.password
    }

    const res = this._userService.loginExist(this._user)
      .subscribe(
        response => {
          console.log("response", response);
          Swal.fire('', `El usuario ${this._user.login} ya existe`, 'error');
        },
        error => {
          console.log("error", error, this._user);
          // Si no existe el Usuario, guardarlo en BBDD.
          this._userService.postUser(this._user)
            .subscribe(response => {
              console.log("response", response);

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