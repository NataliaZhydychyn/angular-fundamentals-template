import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  registrationForm = this.fb.group({
    name: ['', Validators.required, Validators.minLength(6)],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    if(this.registrationForm.valid) {
      console.log('Form Submitted!');
      this.registrationForm.reset();
    }
  }
}
