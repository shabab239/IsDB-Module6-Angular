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

  createStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.baseUrl, student);
  }

  getStudentById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`${this.baseUrl}/${id}`);
  }

  updateStudent(id: number, student: Student): Observable<Student> {
    return this.httpClient.put<Student>(`${this.baseUrl}/${id}`, student);
  }

  deleteStudent(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

}
