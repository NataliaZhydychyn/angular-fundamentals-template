import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { Directive } from "@angular/core";

@Directive({
  selector: '[emailValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true },
  ]
})
export class EmailValidatorDirective implements Validator {
  validate = emailValidator;
}

function emailValidator(control: AbstractControl): ValidationErrors | null {
  const email = control.value;
  if (!email) {
    return null;
  }
  
  const isValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    .test(email.toLowerCase());
  
  return isValid ? null : { emailValidator: true };
}
