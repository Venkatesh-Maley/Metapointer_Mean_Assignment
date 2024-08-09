import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  // Fetch all students
  getStudents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/students`);
  }

  // Fetch a student by ID
  getStudent(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/students/${id}`);
  }

  // Create a new student
  createStudent(student: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/student/create`, student);
  }

  // Update a student by ID
  updateStudent(id: string, value: any): Observable<Object> {
    return this.http.patch(`${this.baseUrl}/students/${id}`, value);
  }

  // Delete a student by ID
  deleteStudent(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/students/${id}`);
  }
}
