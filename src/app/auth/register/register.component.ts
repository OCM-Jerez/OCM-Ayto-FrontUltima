import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import Swal from 'sweetalert2';

import { Observable, of } from "rxjs";

import { ConfirmationService } from "primeng/api";
import { MessageService } from "primeng/api";

import { mustMatch, REGISTER_VALIDATORS } from "./REGISTER.validators"
import { IregisterUser, IUser } from '../../domain/user';
import { UserService } from "src/app/service/user.service";
import { first, map, tap } from "rxjs/operators";
import { AuthService } from "../auth.service";

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
export class RegisterComponent implements OnInit {
  private _miError: string = '';
  formGroup: FormGroup;
  private _user: IregisterUser;


  constructor(
    private _userService: UserService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this._loadForm();
  }

  ngOnInit() { }

  private _loadForm(): void {
    this.formGroup = this._formBuilder.group(
      {
        user: ['12345', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(5)]],
        firstName: [null],
        lastName: [null],
        email: [null],
        password: ['1234546', [Validators.required, Validators.minLength(6)]],
        // NO se como pasar el valor del campo password
        passwordConfirm: ['1234546', [Validators.required, Validators.minLength(6), mustMatch('passwordConfirm')]],
      }
    )
  }


  // private _loadForm(): void {
  //   this.formGroup = this._formBuilder.group(
  //     {
  //       user: ['12345', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(5)]],
  //       firstName: [null],
  //       lastName: [null],
  //       email: [null],
  //       password: ['1234546', [Validators.required, Validators.minLength(6)]],
  //       // NO se como pasar el valor del campo password
  //       passwordConfirm: ['1234546', [Validators.required, Validators.minLength(6)]],
  //     },
  //     { validator: CustomValidator.passwordValidator('passsword', 'passwordConfirm') });
  // }

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
      "login": "mamapp7",
      "password": "mamapp"
    }

    // const res = this._userService.loginExist(this._user)
    //   .subscribe(response => {
    //     console.log("retorno loginExist", response);
    //   })

    // const res = this._userService.loginExist(this._user)
    //   .pipe(
    //     tap(),
    //     map(response => {
    //       console.log("retorno loginExist", response);
    //     })
    // );

    const res = this._userService.loginExist(this._user)
      .pipe(
        first()
      )
      .subscribe({
        next: val => console.log('next: ', val),
        error: err => console.log('error subscribe: ', err),
        complete: () => console.log('complete')
      });


    // const res = this._userService.loginExist("mamap7").subscribe(response => {
    //   console.log("retorno loginExist", response);
    // })

    // this._userService.postUser(this._user).subscribe(response => {
    //   this._savePrograma('registrado');
    // })
  }


  registro() {
    // const { login, firstName, lastName, email, password } = this.miFormulario.value;
    const activated = true;
    const langKey = 'es'
    const user: IUser = {
      firstName: 'firstName',
      email: 'email',
      password: 'password',
      login: 'login',
      lastName: 'lastName',
      activated: true,
      langKey: 'langKey'
    }

    this.authService.registro(user)
      .subscribe(ok => {
        if (ok) {
          Swal.fire('', 'El usuario ha sido creado correctamente', 'success');
          this._router.navigateByUrl('/login');
        } else {

        }
      }, error => {
        // TODO Cambiar mensage posibles errores.
        if (error.error.message = 'Invalid login name or password.') {
          this._miError = 'Nombre de usuario o password erroneo.';
        }
        Swal.fire('Error', error.error.message, 'error');
      }, () => {
        // En teoria el observable se completa, pero no estoy seguro.
        // console.log('complete');
      });
  }

  private _savePrograma(message: string) {
    console.log("Registrado");
    this._router.navigate(['/auth/login']);
    this.messageService.add({ severity: 'success', summary: 'Todo correcto', detail: `programa ${message}`, life: 4000 });
  }

}