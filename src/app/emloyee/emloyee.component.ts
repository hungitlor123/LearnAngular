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
import { MatProgressBarModule } from '@angular/material/progress-bar';

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
    //
    MatProgressBarModule,
  ],
})
export class EmloyeeComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder) {}

  employees: Emloyee[] = [];
  createEmployeeForm: FormGroup;
  dataSource = new MatTableDataSource<Emloyee>(this.employees);
  displayedColumns: string[] = [
    'name',
    'email',
    'address',
    'phone',
    'salary',
    'birthday',
    'joindate',
  ];
  loading: boolean = false;
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
  public createEmployee() {
    if (this.createEmployeeForm.valid) {
      this.loading = true;

      setTimeout(() => {
        console.log(this.createEmployeeForm.value);
        this.employees.push(this.createEmployeeForm.value);
        this.dataSource.data = this.employees;

        this.loading = false;
      }, 2000);
    }
  }
}
