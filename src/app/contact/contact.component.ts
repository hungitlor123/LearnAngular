import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'contact',
  standalone: true,
  templateUrl: './contact.component.html',
  imports: [UserComponent],
  // styleUrls: ['./name.component.scss']
})
export class ContactComponent implements OnInit {
  constructor() {}
  name: string = 'Vai luon';
  ngOnInit(): void {}
}
