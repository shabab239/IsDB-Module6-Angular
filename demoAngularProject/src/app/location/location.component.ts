import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocationService } from './location.service';
import { Location } from './location.model';

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
  ) {}

  ngOnInit(): void {
    this.locations = this.locationService.getAllLocations();
  }

  deleteLocation(id: string) {
    this.locationService.deleteLocation(id)
      .subscribe({
        next: response => {
          this.locations = this.locationService.getAllLocations();
          //this.router.navigate(["/location"]);
        },
        error: error => {
          console.log(error);
          alert("Error printed on console");
        },

      })
  }

}
