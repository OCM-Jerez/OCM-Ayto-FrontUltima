import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
    exports: [ReactiveFormsModule, FormsModule, InputTextModule, InputTextareaModule, ButtonModule],
})
export class SharedFormModule { }
