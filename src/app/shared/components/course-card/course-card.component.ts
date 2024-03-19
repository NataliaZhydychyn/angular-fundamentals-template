import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ICourse {
  title: string;
  description: string;
  creationDate: Date;
  duration: number;
  authors: string[];
}

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input() course!: ICourse;
  @Input() editable: boolean = true; // Default value is false
  showMoreButtonText = 'Show More';
  
  @Output() clickOnShow: EventEmitter<void> = new EventEmitter<void>();

}
