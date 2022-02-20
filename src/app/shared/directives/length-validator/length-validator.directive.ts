import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function LengthValidator(maxLength: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value.length < maxLength? {lengthInvalid: true} : null;
  };
}
