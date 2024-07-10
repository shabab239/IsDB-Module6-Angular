import { Component, OnInit } from '@angular/core';
import { Location } from '../location.model';
import { LocationService } from '../location.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-update-location',
  templateUrl: './update-location.component.html',
  styleUrl: './update-location.component.css'
})
export class UpdateLocationComponent implements OnInit {

  id!: string;
  location: Location = new Location();

  constructor(
    private locationService: LocationService,
    private router: Router,
    private route: ActivatedRoute,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.location = new Location();
    this.id = this.route.snapshot.params["id"];
    this.locationService.getLocationById(this.id)
      .subscribe({
        next: response => {
          this.location = response;
          console.log(response);
        },
        error: error => {
          alert("Error printed on console");
          console.log(error);
        }
      })
  }

  updateLocation(){

    this.locationService.updateLocation(this.id, this.location)
      .subscribe({
        next: response => {
          this.router.navigate(["/location"]);
        },
        error: error => {
          alert("Error printed on console");
          console.log(error);
        }
      })

  }

}
