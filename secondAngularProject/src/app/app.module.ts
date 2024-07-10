import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { LocationComponent } from './location/locations/location.component';
import { CreateLocationComponent } from './location/create-location/create-location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { UpdateLocationComponent } from './location/update-location/update-location.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    LocationComponent,
    CreateLocationComponent,
    UpdateLocationComponent
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
