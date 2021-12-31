import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Observable, of } from "rxjs";

import { ConfirmationService } from "primeng/api";
import { MessageService } from "primeng/api";

import { REGISTER_VALIDATORS } from "./REGISTER.validators"
import { IregisterUser } from '../../domain/user';
import { UserService } from "src/app/service/user.service";
import { first, map, tap } from "rxjs/operators";

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
  formGroup: FormGroup;
  private _user: IregisterUser;


  constructor(
    private _userService: UserService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) {
    this._loadForm();
  }

  ngOnInit() {

  }


  private _loadForm(): void {
    this.formGroup = this._formBuilder.group(
      {
        user: ['12345', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(5)]],
        firstName: [null],
        lastName: [null],
        email: [null],
        password: ['1234546', [Validators.required, Validators.minLength(6)]],
        passwordConfirm: ['1234546', [Validators.required, Validators.minLength(6)]],
      }
    )
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
      "login": "mamapp8",
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

  private _savePrograma(message: string) {
    console.log("Registrado");
    this._router.navigate(['/auth/login']);
    this.messageService.add({ severity: 'success', summary: 'Todo correcto', detail: `programa ${message}`, life: 4000 });
  }

}