import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function vietnamPhoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const phoneRegex = /^(03|05|07|09)\d{8}$/;
    const valid = phoneRegex.test(control.value);
    return valid ? null : { invalidPhone: true };
  };
}
