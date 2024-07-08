import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { LocationComponent } from './location/location.component';
import { CreateLocationComponent } from './location/create-location/create-location.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    LocationComponent,
    CreateLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
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
