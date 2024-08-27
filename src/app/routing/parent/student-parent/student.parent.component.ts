import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../../../student/student.type';
import { CommonModule } from '@angular/common';
import { StudentProService } from '../../../student-pro/student-pro.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'student-parent',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './student-parent.component.html',
  //   styleUrls: ['./name.component.scss'],
})
export class StudentParentComponent implements OnInit {
  students$: Observable<Student[]>;
  constructor(private _studenService: StudentProService) {}

  ngOnInit(): void {
    this.students$ = this._studenService.students$;
    //cach bthuong
    // this._studenService.getStudent().subscribe();
  }
}
