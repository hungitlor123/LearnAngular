import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor() {}
  name: string = 'Tokuda Pro';
  ngOnInit(): void {}
}
