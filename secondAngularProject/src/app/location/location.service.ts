import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from './location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  baseUrl: string = "http://localhost:3000/locations";

  constructor(private httpClient: HttpClient) { }

  // getAllLocations(): Observable<Location[]> {
  //   return this.httpClient.get<Location[]>(this.baseUrl);
  // }

  getAllLocations(): Observable<Location[]> {
    return this.httpClient.get<Location[]>(this.baseUrl);
  }

  createLocation(location: Location): Observable<Location> {
    return this.httpClient.post<Location>(this.baseUrl, location);
  }

  getLocationById(id: number): Observable<Location> {
    return this.httpClient.get<Location>(`${this.baseUrl}/${id}`);
  }

  updateLocation(id: number, location: Location): Observable<Location> {
    return this.httpClient.put<Location>(`${this.baseUrl}/${id}`, location);
  }

  deleteLocation(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}
