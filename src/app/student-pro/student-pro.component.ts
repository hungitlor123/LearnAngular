import { Component, OnInit } from '@angular/core';
import { StudentProService } from './student-pro.service';
import { Observable, take } from 'rxjs';
import { Student, StudentCreate } from '../student/student.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'student-pro',
  standalone: true,
  templateUrl: './student-pro.component.html',
  styleUrls: ['./student-pro.component.scss'],
  imports: [CommonModule],
})
export class StudentProComponent implements OnInit {
  students$: Observable<Student[]>;

  constructor(private _studentProService: StudentProService) {}

  ngOnInit(): void {
    this.students$ = this._studentProService.students$;

    // console.warn('Truoc khi goi subscribe ');

    // console.warn('Sau khi goi subscribe ');

    // console.warn('lay data tu api');

    this._studentProService.getStudents().subscribe();

    this.students$.subscribe((value) => {
      console.log(value);
    });
  }

  createStudent() {
    const student: StudentCreate = {
      name: 'Em Gai Chim To',
      age: 18,
      email: 'emgaichimto@gmail.com',
      phone: '0123456789',
    };
    this._studentProService.createStudent(student).subscribe({
      next: (result) => {
        //khi tra ve thanh cong 200 201 204
        console.log(result);
      },
      error: (error) => {
        //khi tra ve that bai 400 404 415 500
        console.log('error');
      },
      complete: () => {
        //khi co ket qua tra ve
        console.log('call api complete');
      },
    });
  }
}
