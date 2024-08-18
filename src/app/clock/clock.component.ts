import { Component, OnInit } from '@angular/core';
import { ClockService } from './clock.service'; // Import ClockService
import { CommonModule } from '@angular/common';
import { PipeModule } from '../animal/pipo.module';

@Component({
  selector: 'clock',
  standalone: true,
  imports: [CommonModule, PipeModule],
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {
  dateTime: Date;

  constructor(private clockService: ClockService) {
    this.dateTime = this.clockService.dateTime;
  }

  ngOnInit(): void {
    setInterval(() => {
      this.dateTime = this.clockService.dateTime;
    }, 1000);
  }
}
