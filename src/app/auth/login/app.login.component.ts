import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

import Swal from 'sweetalert2';

import { Observable, of } from "rxjs";

import { ConfirmationService } from "primeng/api";
import { MessageService } from "primeng/api";


import { customValidator, LOGIN_VALIDATORS } from "./login.validators"
import { environment } from 'src/environments/environment';
import { ILogin } from './login.interface';
import { UserService } from '../../service/user.service';
import { LoginService } from "./login.service";
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
export class AppLoginComponent implements OnInit {
  miError: string = '';
  formGroup: FormGroup;
  private _user: IregisterUser;

  constructor(
    private httpClient: HttpClient,
    private _userService: UserService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private loginService: LoginService,
  ) {
    this._loadForm();
  }

  ngOnInit() { }

  private _loadForm(): void {
    this.formGroup = this._formBuilder.group(
      {
        // user: ['12345', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(5), customValidator()]],
        user: ['mamapp10', [Validators.required, Validators.minLength(5)]],
        password: ['mamapp', [Validators.required, Validators.minLength(6)]],
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

  // login() {
  //   const URL_API = environment.host + '/login';
  //   this.httpClient.post(URL_API, { login: "maria", password: "guess" }).subscribe((data) => {
  //     console.log(data);
  //   });
  //   this._router.navigate(['/favorites/dashboardanalytics']);
  // }

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
          await Swal.fire('', `El usuario ${this._user.login} existe`, 'success');
          this.passwordExist()
        },
        async error => {
          // Si no existe el Usuario.
          await Swal.fire('', `El usuario ${this._user.login} no existe en la base de datos`, 'error');
          this.passwordExist()
        }
      )
  }

  passwordExist() {
    const res1 = this._userService.passwordExist(this._user)
      .subscribe(
        async response => {
          await Swal.fire('', `El password ${this._user.password} existe`, 'success');
          this._router.navigate(['/favorites/dashboardanalytics']);
        },
        error => {
          // Si no existe el password.
          Swal.fire('', `El password ${this._user.password} no existe en la base de datos`, 'error');

        }
      )
  }

}