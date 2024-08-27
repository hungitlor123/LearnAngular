import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student, StudentCreate } from './student.type';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  // baseURL = environment.baseUrl;
  //HTTP client
  constructor(private _httpClient: HttpClient) {}

  //get all student
  getStudent() {
    return this._httpClient.post<Student[]>('/api/students/filter', {});
  }
  // tạo mới student
  createStudent(student: StudentCreate) {
    return this._httpClient.post<Student>('/api/students', student);
  }
  // xoa student
  deleteStudent(id: string) {
    return this._httpClient.delete('/api/students/' + id);
  }
  // lấy thông tin student theo id
  getStudentById(id: string) {
    return this._httpClient.get<Student>('/api/students/' + id);
  }
  // cập nhật thông tin student
  updateStudent(student: Student) {
    return this._httpClient.put<Student>(
      '/api/students/' + student.id,
      student
    );
  }
}
