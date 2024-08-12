import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/students/student.component';
import { LocationComponent } from './location/locations/location.component';
import { CreateLocationComponent } from './location/create-location/create-location.component';
import { UpdateLocationComponent } from './location/update-location/update-location.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { ViewStudentComponent } from './student/view-student/view-student.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { RoleGuard } from './auth/role.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: "login", component: LoginComponent},
  {path: "location", component: LocationComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'Admin' }},
  {path: "create_location", component: CreateLocationComponent, canActivate: [AuthGuard]},
  {path: "update_location/:id", component: UpdateLocationComponent, canActivate: [AuthGuard]},
  {path: "student", component: StudentComponent, canActivate: [AuthGuard]},
  {path: "create_student", component: CreateStudentComponent, canActivate: [AuthGuard]},
  {path: "view_student/:id", component: ViewStudentComponent, canActivate: [AuthGuard]},
  {path: "update_student/:id", component: UpdateStudentComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
