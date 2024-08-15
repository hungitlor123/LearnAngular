import { CommonModule } from '@angular/common';
import { Component, OnInit, Pipe } from '@angular/core';
import { PipeModule } from './pipo.module';

@Component({
  selector: 'animal',
  standalone: true,
  imports: [CommonModule, PipeModule],
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent implements OnInit {
  animals = [
    { name: 'Lion', status: 'Endangered', age: 8 },
    { name: 'Elephant', status: 'Vulnerable', age: 15 },
    { name: 'Panda', status: 'Endangered', age: 5 },
    { name: 'Kangaroo', status: 'Least Concern', age: 3 },
    { name: 'Dolphin', status: 'Near Threatened', age: 10 },
  ];

  //ngay
  dateTime = new Date();
  //number
  salary: number = 12600000;
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.dateTime = new Date();
    }, 1000);
  }
}
