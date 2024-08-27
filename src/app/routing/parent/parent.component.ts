import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'parent',
    templateUrl: './parent.component.html',
    standalone: true,
    imports: [RouterModule]
})
export class ParentComponent implements OnInit {

    childPath: any[] = ['../child'];

    constructor() { }

    ngOnInit(): void { }
}
