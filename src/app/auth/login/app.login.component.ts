import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import Swal from 'sweetalert2';

import { LOGIN_VALIDATORS } from "./login.validators"
import { UserService } from '../../service/user.service';

import { IregisterUser } from "src/app/domain/user";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
  styleUrls: ['./app.login.component.scss'],

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
      // .pipe(
      //   catchError(err => {
      //     console.log("error", err);
      //     return throwError(err);
      //   })
      // )
      .subscribe(
        async response => {
          if (response) this._router.navigate(['/favorites/dashboardanalytics']);
          //  else {
          //   Swal.fire('', `Usuario o password erroneo`, 'error');
          // }
        },
        error => {
          // Si no existe el Usuario.
          Swal.fire('', `Usuario o password erroneo`, 'error');
        }
      )
  }

}