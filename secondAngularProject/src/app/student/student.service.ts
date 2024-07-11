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

  getAllStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.baseUrl}`);
  }

  // createStudent(student: Student): Observable<Student> {
  //   return this.httpClient.post<Student>(this.baseUrl, student);
  // }

  createStudent(student: Student): Observable<any> {
    const body = {
      name: student.name,
      email: student.email,
      cell: student.cell,
      location: { id: student.location.id }
    };
    return this.httpClient.post<Student>(this.baseUrl, body);
  }
}
