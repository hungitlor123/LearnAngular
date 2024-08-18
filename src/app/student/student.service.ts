import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student, StudentCreate } from './student.type';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  //http client
  baseUrl = environment.baseUrl;
  constructor(private _httpClient: HttpClient) {}

  // subscribe

  getStudents() {
    //call api
    return this._httpClient.post<Student[]>('/api/students/filter', {});

    // .subscribe({
    //   next: (result) => {
    //     //khi tra ve thanh cong 200 201 204
    //     console.log(result);
    //   },
    //   error: (error) => {
    //     //khi tra ve that bai 400 404 415 500
    //     console.log('error');
    //   },
    //   complete: () => {
    //     //khi co ket qua tra ve
    //     console.log('call api complete');
    //   },
    // });
  }
  createStudent(stundent: StudentCreate) {
    //call api
    return this._httpClient.post<Student>('/api/students', stundent);
  }
}
