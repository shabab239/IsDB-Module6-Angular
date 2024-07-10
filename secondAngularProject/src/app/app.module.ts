import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/students/student.component';
import { LocationComponent } from './location/locations/location.component';
import { CreateLocationComponent } from './location/create-location/create-location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { UpdateLocationComponent } from './location/update-location/update-location.component';
import { EmployeeComponent } from './employee/employee.component';
import { ViewStudentComponent } from './student/view-student/view-student.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    LocationComponent,
    CreateLocationComponent,
    UpdateLocationComponent,
    EmployeeComponent,
    ViewStudentComponent,
    CreateStudentComponent,
    UpdateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(
      withFetch()
    ),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
