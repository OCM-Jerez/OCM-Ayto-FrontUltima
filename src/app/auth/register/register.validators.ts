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

export function mustMatch(field: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (control.parent) {
            const passwordConfirm = control.parent.get('passwordConfirm');
            const password = control.parent.get('password');

            if (!passwordConfirm || !password) {
                return { identityRevealedValidator: true }
            }

            const pass = password.value as string;
            const passConfirm = passwordConfirm.value as string;

            if (pass !== passConfirm) {
                if (field === 'password') {
                    passwordConfirm.setErrors({ identityRevealedValidator: true });
                    return null;
                }
                return { identityRevealedValidator: true }
            }

            if (field === 'password') {
                passwordConfirm.setErrors(null);
                return null;
            }
        }

        return null;
    };
}

export const REGISTER_VALIDATORS: IAtribute[] = [
    {
        formControlName: 'login',
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
                message: 'Debe tener al menos 3 caracteres.'
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
                message: 'Debe tener al menos 3 caracteres.'
            },
            {
                name: 'identityRevealedValidator',
                message: 'No coincide'
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
                message: 'Debe tener al menos 3 caracteres.'
            },
            {
                name: 'identityRevealedValidator',
                message: 'No coincide'
            },
        ]
    },

];