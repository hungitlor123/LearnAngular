import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'student-parent-detail',
  standalone: true,
  templateUrl: './student-parent-detail.component.html',
  imports: [CommonModule],
  //   styleUrls: ['./name.component.scss'],
})
export class StudentParentDetailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
