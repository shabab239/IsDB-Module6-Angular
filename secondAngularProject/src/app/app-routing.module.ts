import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/students/student.component';
import { LocationComponent } from './location/locations/location.component';
import { CreateLocationComponent } from './location/create-location/create-location.component';
import { UpdateLocationComponent } from './location/update-location/update-location.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { ViewStudentComponent } from './student/view-student/view-student.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';

const routes: Routes = [
  {path: "location", component: LocationComponent},
  {path: "create_location", component: CreateLocationComponent},
  {path: "update_location/:id", component: UpdateLocationComponent},

  {path: "student", component: StudentComponent},
  {path: "create_student", component: CreateStudentComponent},
  {path: "view_student/:id", component: ViewStudentComponent},
  {path: "update_student/:id", component: UpdateStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
