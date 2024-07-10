import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '../location.model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit {

  locations!: Observable<Location[]>;

  constructor(
    private locationService: LocationService,
    private router: Router,
    private httpClient: HttpClient
  ) {



  }

  ngOnInit(): void {
    this.loadLocations();
  }

  loadLocations() {
    this.locations = this.locationService.getAllLocations();
  }

  navigateToAddLocation() {
    this.router.navigateByUrl('/create_location');
  }

  updateLocation(id: string) {
    this.router.navigate(["/update_location", id]);
  }

  deleteLocation(id: string) {
    this.locationService.deleteLocation(id)
      .subscribe({
        next: response => {
          this.loadLocations();
        },
        error: error => {
          console.log(error);
          alert("Error printed on console");
        },

      })
  }



}
