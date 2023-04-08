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
    this.dashboardService.getButtonsEvents()
    this.dashboardService.getPagesEvents()
    this.getResults()
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

  getResults(event: any = []) {
    let filterArray = event;
    filterArray?.forEach((_item: any, index: string | number) => {
      filterArray[index].precedence = index
    })
    this.dashboardService.getResults(filterArray, this.range.start, this.range.end).subscribe((results) => {
      this.results = results
    })
  }
}
