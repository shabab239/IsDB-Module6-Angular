import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { Observable } from 'rxjs';
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
    this.students = this.studentService.getAllStudents();
    
    this.locations = this.locationService.getAllLocations();
    this.students.subscribe(students => {
      this.locations.subscribe(locations => {
        students.forEach(student => {
          let matchingLocation = locations.find(loc => loc.id === student.location.id);
          if (matchingLocation) {
            student.location = matchingLocation;
          }
        });
      });
    });
  }


  navigateToAddStudent() {
    this.router.navigate(['/create_student']);
  }

}
