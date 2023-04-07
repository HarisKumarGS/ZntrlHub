import { Component, OnInit } from '@angular/core';
import { NbCalendarRange } from '@nebular/theme';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  range: NbCalendarRange<any> = {
    start: undefined,
    end: undefined
  }

  results: any = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.results = this.dashboardService.getResults()
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
