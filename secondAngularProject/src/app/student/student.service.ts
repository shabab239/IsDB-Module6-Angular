import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl: string = "http://localhost:3000/students"

  constructor(private httpClient: HttpClient) { }

  getAllStudents(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseUrl}`);
  }
}
