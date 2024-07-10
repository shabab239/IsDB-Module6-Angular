import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();

  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }


  ngOnInit(): void {
    //this.studentService.createStudent()
  }


}
