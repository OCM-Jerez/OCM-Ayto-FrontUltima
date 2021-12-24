import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Observable, of } from "rxjs";

import { ConfirmationService } from "primeng/api";
import { MessageService } from "primeng/api";


import { REGISTER_VALIDATORS } from "./REGISTER.validators"

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

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router,
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
        password: ['1234546', [Validators.required, Validators.minLength(6)]],
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

}