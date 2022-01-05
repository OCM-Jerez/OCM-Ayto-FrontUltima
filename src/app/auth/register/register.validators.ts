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


export const identityRevealedValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const name = control.get('password');
    const alterEgo = control.get('passwordConfirm');
    return name.value === alterEgo.value ? { identityRevealed: true } : null;
};

export function mustMatch(password: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const passwordConfirm = control.value as string;
        console.log(passwordConfirm);
        if (password !== passwordConfirm) {
            console.log('No coinciden');
            return { mustMatch: true };
        } else {

            console.log('Si coinciden');
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
    {
        formControlName: 'passwordConfirm',
        validators: [
            {
                name: 'required',
                message: 'El campo es requerido. Por favor, introduce un valor.'
            },
            {
                name: 'minlength',
                message: 'Debe tener al menos 6 caracteres.'
            },
            {
                name: 'identityRevealedValidator',
                message: 'No coincide'
            },
        ]
    },

];