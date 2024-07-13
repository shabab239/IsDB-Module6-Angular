import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { forkJoin, Observable, of } from 'rxjs';
import { LocationService } from '../../location/location.service';
import { Location } from '../../location/location.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {

  students!: Observable<Student[]>;
  locations!: Observable<Location[]>;

  constructor(
    private studentService: StudentService,
    private locationService: LocationService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.loadStudents();

  }

  loadStudents() {
    forkJoin({
      students: this.studentService.getAllStudents(),
      locations: this.locationService.getAllLocations()
    }).subscribe(({ students, locations }) => {
      students.forEach(student => {
        let matchingLocation = locations.find(loc => loc.id === student.location.id);
        if (matchingLocation) {
          student.location = matchingLocation;
        }
      });
      this.students = of(students);
      this.locations = of(locations);
    });
  }

  updateStudent(id: number) {
    this.router.navigate(["/update_student", id]);
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id)
      .subscribe({
        next: response => {
          this.loadStudents();
        },
        error: error => {
          console.log(error);
          alert("Error printed on console");
        },

      })
  }

  navigateToAddStudent() {
    this.router.navigate(['/create_student']);
  }

}
