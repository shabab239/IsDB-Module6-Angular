import { Component } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocationService } from '../../location/location.service';
import { Location } from '../../location/location.model';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent {

  id!: string;
  student: Student = new Student();
  locations!: Observable<Location[]>;

  constructor(
    private studentService: StudentService,
    private locationService: LocationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.locations = this.locationService.getAllLocations();

    this.student = new Student();
    this.student.location = new Location();

    this.id = this.route.snapshot.params["id"];
    this.studentService.getStudentById(this.id)
      .subscribe({
        next: response => {
          this.student = response;
          console.log(response);
        },
        error: error => {
          alert("Error printed on console");
          console.log(error);
        }
      })
  }

  updateStudent() {

    this.studentService.updateStudent(this.id, this.student)
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
