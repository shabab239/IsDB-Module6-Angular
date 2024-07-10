import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { LocationComponent } from './location/locations/location.component';
import { CreateLocationComponent } from './location/create-location/create-location.component';
import { UpdateLocationComponent } from './location/update-location/update-location.component';

const routes: Routes = [
  {path: "student", component: StudentComponent},
  {path: "location", component: LocationComponent},
  {path: "create_location", component: CreateLocationComponent},
  {path: "update_location/:id", component: UpdateLocationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
