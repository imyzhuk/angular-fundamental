import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function PatternValidator(pattern: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = pattern.test(control.value);
    return forbidden ? null : {forbiddenPattern: true};
  };
}
