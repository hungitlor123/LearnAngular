import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Routes,
} from '@angular/router';
import { ChildComponent } from '../app/routing/child/child.component';
import { ParentComponent } from './routing/parent/parent.component';
import { StudentParentComponent } from './routing/parent/student-parent/student.parent.component';
import { inject } from '@angular/core';
import { StudentProService } from './student-pro/student-pro.service';
import { StudentParentDetailComponent } from './routing/parent/student-parent/detail/student-parent-detail.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StudentComponent } from './student/student.component';
import { StudentProComponent } from './student-pro/student-pro.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  //default route ve child
  {
    path: '',
    component: SidebarComponent,
    children: [
      {
        path: 'student',
        component: StudentComponent,
      },
      {
        path: 'student-pro',
        component: StudentProComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
  {
    path: 'child',
    component: ChildComponent,
  },
  {
    path: 'parent',
    component: ParentComponent,
    children: [
      {
        path: 'student',
        component: StudentParentComponent,
        resolve: {
          // Can 2 hoac nhieu API thi sao
          students: () => inject(StudentProService).getStudent(),
          //nghien cuu forkJoin
        },
        children: [
          {
            path: 'id',
            component: StudentParentDetailComponent,
            resolve: {
              student: (ActivatedRoute: ActivatedRouteSnapshot) =>
                inject(StudentProService).getStudent(),
            },
          },
        ],
      },
    ],
  },
];
