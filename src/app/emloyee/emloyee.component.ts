import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Emloyee } from './emloyee.type';
import { vietnamPhoneValidator } from '../../validators/phone.validator';
import { CommonModule } from '@angular/common';
import { minAgeValidator } from '../../validators/birthday.validator';
import { joinDateValidator } from '../../validators/joindate.valitor';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'emloyee',
  standalone: true,
  templateUrl: './emloyee.component.html',
  styleUrls: ['./emloyee.component.scss'],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    //INPORT DAY
    MatDatepickerModule,
    MatNativeDateModule,
    //import module form
    FormsModule,
    ReactiveFormsModule,
    //table
    MatTableModule,
  ],
})
export class EmloyeeComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder) {}

  employees: Emloyee[] = [
    {
      name: 'Nguyen Van A',
      email: 'nguyenvana@gmail.com',
      address: '123 Le Loi, Ho Chi Minh City',
      phone: 907123456,
      salary: '15000000',
      birthday: '1990-01-15',
      joindate: '2023-05-01',
    },
    {
      name: 'Tran Thi B',
      email: 'tranthib@gmail.com',
      address: '456 Nguyen Trai, Ha Noi',
      phone: 905654321,
      salary: '20000000',
      birthday: '1985-08-20',
      joindate: '2022-03-10',
    },
    {
      name: 'Le Van C',
      email: 'levanc@gmail.com',
      address: '789 Le Duan, Da Nang',
      phone: 903112233,
      salary: '18000000',
      birthday: '1992-07-10',
      joindate: '2023-02-20',
    },
  ];
  createEmployeeForm: FormGroup;
  displayedColumns: string[] = [
    'name',
    'email',
    'address',
    'phone',
    'salary',
    'birthday',
    'joindate',
  ];
  ngOnInit(): void {
    this.initcreateEmployeeForm();
  }

  private initcreateEmployeeForm() {
    this.createEmployeeForm = this._formBuilder.group({
      name: [null, [Validators.required]],
      email: ['hungdz@gmail.com', [Validators.required]],
      address: [null, [Validators.required]],
      phone: [null, [Validators.required, vietnamPhoneValidator()]],
      salary: [0, [Validators.required]],
      birthday: [null, [Validators.required, minAgeValidator(16)]],
      joindate: [null, [Validators.required, joinDateValidator()]],
    });
  }
  public createEmloyee() {
    if (this.createEmployeeForm.valid) {
      console.log(this.createEmployeeForm.value);
      this.employees.push(this.createEmployeeForm.value);
      this.dataSource.data = [...this.employees];
    }
  }
  public dataSource = new MatTableDataSource<Emloyee>(this.employees);
}
