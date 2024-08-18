import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClockService {
  private _dateTime: Date = new Date();

  get dateTime(): Date {
    return this._dateTime;
  }

  constructor() {
    this.startClock();
  }

  private startClock(): void {
    setInterval(() => {
      this._dateTime = new Date();
    }, 1000);
  }
}
