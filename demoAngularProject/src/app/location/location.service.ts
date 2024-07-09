import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from './location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  baseUrl: string = "http://localhost:3000/locations";

  constructor(private httpClient: HttpClient) {}

  getAllLocations(): Observable<Location[]> {
    return this.httpClient.get<Location[]>(this.baseUrl);
  }

  deleteLocation(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

}
