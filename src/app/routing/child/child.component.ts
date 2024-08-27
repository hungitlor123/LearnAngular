import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class ChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
