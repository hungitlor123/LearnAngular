import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student, StudentCreate } from '../student/student.type';
import { BehaviorSubject, map, Observable, switchMap, take } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StudentProService {
  // BehaviorSubject & Observable
  // State chỉ được xử lí ở service

  // students: Student[] = [];

  private _students: BehaviorSubject<Student[]> = new BehaviorSubject<
    Student[]
  >([]);

  //lay gia tri cua student va subscribe no neu muon lang nghe su thay doi khi _student duoc next vao value moi
  //dau $ duoc dat sau ten bien neu bien do la bien bat dong bo

  get students$(): Observable<Student[]> {
    return this._students.asObservable();
  }

  constructor(private _httpClient: HttpClient) {}

  getStudents() {
    //call api
    return this._httpClient.post<Student[]>('/api/students/filter', {}).pipe(
      take(1),
      switchMap((students) => {
        //api moi tra ve
        // console.log(students);
        this._students.next(students);
        return students;
      })
    );
  }
  createStudent(stundent: StudentCreate) {
    return this.students$.pipe(
      take(1),
      switchMap((students) =>
        this._httpClient.post<Student>('/api/students', stundent).pipe(
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

  deleteStudent(id: string) {
    //call api
    return this._httpClient.delete<any>(`/api/students/` + id);
  }
}
