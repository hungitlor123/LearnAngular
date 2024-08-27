import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student, StudentCreate } from '../student/student.type';
import { BehaviorSubject, map, Observable, switchMap, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentProService {
  // baseURL = environment.baseUrl;
  //HTTP client

  // behavior subject & observable
  // => State chi duoc xu li o service
  private _students: BehaviorSubject<Student[]> = new BehaviorSubject<
    Student[]
  >([]);
  // lay gia tri hien tai cua students va subribe no neu muon lang nghe su thay doi
  //dau $ duoc dat sau ten bien neu no la bien bat dong bo
  get students$(): Observable<Student[]> {
    return this._students.asObservable();
  }

  constructor(private _httpClient: HttpClient) {}

  //get all student
  getStudent() {
    return this._httpClient.post<Student[]>('/api/students/filter', {}).pipe(
      take(1),
      switchMap((students) => {
        //api moi tra ve
        // console.log(students);
        // bo gia tri moi, next la next value
        this._students.next(students);

        return students;
      })
    );
  }
  // tạo mới student
  createStudent(student: StudentCreate) {
    return this.students$.pipe(
      take(1),
      switchMap((students) =>
        this._httpClient.post<Student>('/api/students', student).pipe(
          map((newStudent) => {
            //Khi api tra ve 1 thang vua duoc tao moi
            const newListStudent = [...students, newStudent];
            this._students.next(newListStudent);

            return newStudent;
          })
        )
      )
    );
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
