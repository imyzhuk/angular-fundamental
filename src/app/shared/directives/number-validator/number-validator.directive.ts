import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function NumberValidator(maxValue: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return Number(control.value) < maxValue? {emailInvalid: true} : null;
  };
}
