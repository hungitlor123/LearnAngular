import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from './user.type';

@Component({
  selector: 'user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [CommonModule, FormsModule],
})
export class UserComponent implements OnInit {
  email: string = 'evericks@gmail.com';
  myClassCss: string = 'text-blue';

  student: Student = { name: 'Tran Van D', age: 17 };

  students: Student[] = [
    { name: 'Phan Van A', age: 16, address: 'Ha Noi' },
    { name: 'Cao Khac B', age: 15 },
    { name: 'Nguyen Van C', age: 18 },
  ];

  isBlue: boolean = true;
  constructor() {}

  ngOnInit(): void {}
  logEmailValue() {
    console.log(this.email);
  }
  toggleColor() {
    this.isBlue = !this.isBlue;
  }
  addStudentToArray() {
    this.students.push(this.student);
    this.student = {
      name: '',
      age: 0,
      address: '',
    };
    console.log(this.students);
  }
}
