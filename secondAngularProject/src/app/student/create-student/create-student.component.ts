import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Location } from '../../location/location.model';
import { LocationService } from '../../location/location.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();
  locations!: Observable<Location[]>;

  constructor(
    private studentService: StudentService,
    private locationService: LocationService,
    private router: Router
  ) { }


  ngOnInit(): void {

    this.student.location = new Location();
    this.locations = this.locationService.getAllLocations();

  }

  createStudent() {
    this.studentService.createStudent(this.student)
      .subscribe({
        next: response => {
          this.router.navigate(["/student"]);
        },
        error: error => {
          alert("Error printed on console");
          console.log(error);
        }
      })

  }


}
