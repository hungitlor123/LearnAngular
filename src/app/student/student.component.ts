import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { CommonModule } from '@angular/common';
import { Student, StudentCreate } from './student.type';

@Component({
  selector: 'student',
  standalone: true,
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  imports: [CommonModule],
})
export class StudentComponent implements OnInit {
  students: any[] = [];
  constructor(private _studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudentData();
  }
  loadStudentData() {
    this._studentService.getStudents().subscribe({
      next: (result) => {
        //khi tra ve thanh cong 200 201 204
        this.students = result;
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
  createStudent() {
    const stundet: StudentCreate = {
      name: 'Nguyen Van A',
      age: 20,
      email: 'hungdz@gmail.com',
      phone: '0123456789',
    };
    this._studentService.createStudent(stundet).subscribe({
      next: (result) => {
        //khi tra ve thanh cong 200 201 204
        console.log(result);
        //load data ngu
        this.loadStudentData();
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
