import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function NameValidator(regExp: RegExp, isRegExpValid: boolean): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if(control.value === "") return null;
    const isValid = isRegExpValid? regExp.test(control.value): !regExp.test(control.value);
    return isValid? null : {forbiddenName: true};
  };
}
