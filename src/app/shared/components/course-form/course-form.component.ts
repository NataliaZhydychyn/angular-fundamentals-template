import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit, OnDestroy {
  courseForm!: FormGroup;
  newAuthor!: FormGroup;
  subscription!: Subscription;

  constructor(private fb: FormBuilder, library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  get authors(): FormArray {
    return this.courseForm.get('authors') as FormArray;
  }

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(2)]],
      authors: this.fb.array([]),
      duration: ['', [Validators.required, Validators.min(0)]],
      newAuthorName: ['']
    });
  }

  ngOnDestroy(): void {
    if(this.subscription)
      this.subscription.unsubscribe();
  }

  addAuthor() {
    const newAuthorName = this.courseForm.controls['newAuthorName'].value;
    if(newAuthorName && newAuthorName.trim().length >= 2) {
      this.authors.push(this.fb.control(newAuthorName));
      this.courseForm.controls['newAuthorName'].setValue('');
    }
  }

  removeAuthor(index: number) {
    this.authors.removeAt(index);
  }
  
  onSubmit() {
    console.log(this.courseForm.value);
  }
}