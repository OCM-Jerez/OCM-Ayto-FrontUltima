import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

import { Observable, of } from "rxjs";

import { ConfirmationService } from "primeng/api";
import { MessageService } from "primeng/api";


import { LOGIN_VALIDATORS } from "./login.validators"
import { environment } from 'src/environments/environment';
import { ILogin } from './login.interface';
import { UserService } from '../../service/user.service';

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
  formGroup: FormGroup;

  constructor(
    private httpClient: HttpClient,
    private _userService: UserService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) {
    this._loadForm();
  }

  ngOnInit() { }


  private _loadForm(): void {
    this.formGroup = this._formBuilder.group(
      {
        user: ['12345', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(5)]],
        password: ['1234546', [Validators.required, Validators.minLength(6)]],
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
    const URL_API = environment.host + '/login';
    this.httpClient.post(URL_API, { login: "maria", password: "guess" }).subscribe((data) => {
      console.log(data);
    });
    this._router.navigate(['/favorites/dashboardanalytics']);
  }

}