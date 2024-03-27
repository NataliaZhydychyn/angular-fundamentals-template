// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-registration-form',
//   templateUrl: './registration-form.component.html',
//   styleUrls: ['./registration-form.component.scss'],
// })
// export class RegistrationFormComponent {
  
//   registrationForm!: FormGroup;
//   isSubmitted = false;
//   // Use the names `name`, `email`, `password` for the form controls.
//   constructor(private fb: FormBuilder) {
//     this.buildForm();
//  }

//  buildForm(): void {
//     this.registrationForm = this.fb.group({
//       name: ["", [Validators.required, Validators.minLength(6)]],
//       email: ["", [Validators.required]],
//       password: ["", Validators.required],
//     });
//   }

//   onSubmit(): void {
//     this.isSubmitted = true
//     console.log(this.registrationForm.value);
//   }

//   get name() { return this.registrationForm?.get('name'); }
//   get email() { return this.registrationForm?.get('email'); }
//   get password() { return this.registrationForm?.get('password'); }

// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  registrationForm!: FormGroup;
  isSubmitted = false;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.registrationForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(6)]],
      email: ["", [Validators.required]],
      password: ["", Validators.required],
    });
  }

  onSubmit(): void {
    this.isSubmitted = true;
    console.log(this.registrationForm.value);
  }

  get name() { return this.registrationForm?.get('name'); }
  get email() { return this.registrationForm?.get('email'); }
  get password() { return this.registrationForm?.get('password'); }
}