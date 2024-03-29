import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { UserService } from "../../service";

import { IloginUser } from '../../domain';
import { mustMatch, REGISTER_VALIDATORS } from "./REGISTER.validators"

import Swal from 'sweetalert2';
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

    const res = this._userService.registerUser(this._user)
      .subscribe(
        response => {
          if (response.login === '') {
            Swal.fire('', `El usuario ${this._user.login} se ha creado correctamente`, 'success');
          } else {
            Swal.fire('', `El usuario ${this._user.login} ya existe`, 'error');
          }
        },
      )
  }

}