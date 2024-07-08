import { Component, OnInit } from '@angular/core';
import { LocationService } from './location.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  ) {



  }

  ngOnInit(): void {
    this.locations = this.locationService.getAllLocations();
  }



}
