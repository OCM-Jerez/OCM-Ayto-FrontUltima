import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export interface IAtribute {
    formControlName: string;
    validators: IValidator[];
}

export interface IValidator {
    name: string;
    message: string;
}

export function customValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value as string;
        if (!value.includes('*')) {
            return { custom1: true };
        }

        if (!value.includes('$')) {
            return { custom2: true };
        }
        return null;
    };
}

export const REGISTER_VALIDATORS: IAtribute[] = [
    {
        formControlName: 'user',
        validators: [
            {
                name: 'required',
                message: 'El campo es requerido. Por favor, introduce un valor.'
            },
            {
                name: 'pattern',
                message: 'Deber ser numeros'
            },
            {
                name: 'minlength',
                message: 'Debe tener al menos 5 caracteres.'
            },
            {
                name: 'custom1',
                message: 'El texto debe contener un asterisco "*"'
            },
            {
                name: 'custom2',
                message: 'El texto debe contener un sigo de dolar "$"'
            }
        ]
    },
    {
        formControlName: 'password',
        validators: [
            {
                name: 'required',
                message: 'El campo es requerido. Por favor, introduce un valor.'
            },
            {
                name: 'minlength',
                message: 'Debe tener al menos 6 caracteres.'
            }
        ]
    },

];