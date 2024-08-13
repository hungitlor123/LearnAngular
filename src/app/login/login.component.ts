import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from './student.type';

@Component({
  selector: 'login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class LoginComponent implements OnInit {
  constructor() {}

  showStudent: boolean = false;
  students: Student[] = [
    { name: 'Phan Van A', age: 16, address: 'Ha Noi' },
    { name: 'Cao Khac B', age: 15 },
    { name: 'Nguyen Van C', age: 18 },
  ];
  newStudent: Student = { name: '', age: 0, address: '' };
  ngOnInit(): void {}

  toggleHiden() {
    this.showStudent = !this.showStudent;
  }

  addStudent() {
    this.students.push({ ...this.newStudent });
    this.newStudent = { name: '', age: 0, address: '' };
    console.log(this.students);
  }
}
