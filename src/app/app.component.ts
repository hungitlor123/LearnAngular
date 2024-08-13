import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmloyeeComponent } from './emloyee/emloyee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent,
    ContactComponent,
    LoginComponent,
    CommonModule,
    FormsModule,
    EmloyeeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  name: string | null | 'Dcm' | 'Cmm' | number = null;

  private _address: string = 'Vinhomes';
  //thang chay dau tien
  //DI
  isHiden: boolean = true;

  constructor() {
    console.log('Tao la constructor');
  }
  //khi no duoc sinh ra
  ngOnInit(): void {
    console.log('Trong khu tao song');
    setTimeout(() => {
      this.name = 5;
    }, 0);
  }
  //khi tao da duoc render ra thanh cong
  ngAfterViewInit(): void {
    console.warn('Trong khu vuc render ra template');
  }
}
