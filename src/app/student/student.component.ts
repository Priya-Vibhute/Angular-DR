import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  studentId=101;
  studentName="Nisha";
  subjects=["Subject-1","Subject-2","Subject-3"]

}
