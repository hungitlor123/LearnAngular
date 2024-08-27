import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentProService } from '../../../../student-pro/student-pro.service';
import { Student } from '../../../../student/student.type';

@Component({
    selector: 'student-header',
    templateUrl: './student-header.component.html',
    standalone: true,
    imports: [CommonModule, RouterModule]
})
export class StudentHeaderComponent implements OnInit {

    students$: Observable<Student[]>;

    constructor(private _studentService: StudentProService) { }

    ngOnInit(): void {
        this.students$ = this._studentService.students$;

        this._studentService.getStudents().subscribe();
    }
}
