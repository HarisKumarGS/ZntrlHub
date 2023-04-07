import { Component, OnInit } from '@angular/core';
import { NbCalendarRange } from '@nebular/theme';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  range: NbCalendarRange<any> = {
    start: new Date(),
    end: new Date()
  }

  constructor() { }

  ngOnInit(): void {
  }

  clearDateRangePicker() {
    this.range = {
      start: undefined,
      end: undefined
    }
  }

  checkIfDateRangePresent() {
    return this.range.start !== undefined || this.range.end !== undefined
  }

  onDateRangeChange(value: any) {
    console.log(value)
  }

}
