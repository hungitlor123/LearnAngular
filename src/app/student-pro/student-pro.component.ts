import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StudentProService } from './student-pro.service';
import { Observable, take } from 'rxjs';
import { Student, StudentCreate } from '../student/student.type';

@Component({
  selector: 'student-pro',
  standalone: true,
  templateUrl: './student-pro.component.html',
  imports: [CommonModule],
  // styleUrls: ['./student-pro.component.scss']
})
export class StudentProComponent implements OnInit {
  students$: Observable<Student[]>;
  constructor(private _studentProService: StudentProService) {}

  ngOnInit(): void {
    this.students$ = this._studentProService.students$;

    this.students$.pipe(take(2)).subscribe((value) => {
      console.log(value);
    });
    this._studentProService.getStudent().subscribe();
  }
  createStudent() {
    const student: StudentCreate = {
      name: 'Hung',
      age: 24,
      email: 'hungne@gmail.com',
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
