import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[emailValidator]',
    providers: [
       { provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true },
    ]
})

export class EmailValidatorDirective implements Validator {
  
    validate(control: AbstractControl): ValidationErrors | null {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        const isValid = emailRegex.test(control.value);
    
         return isValid ? null : { email: true };
    }
 
}