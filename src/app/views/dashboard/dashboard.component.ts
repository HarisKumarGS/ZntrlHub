import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  range = this.dashboardService.getRange()

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getButtonsEvents()
    this.dashboardService.getPagesEvents()
    this.getResults()
  }

  clearDateRangePicker() {
    this.dashboardService.updateRange({
      start: undefined,
      end: undefined
    })
    this.dashboardService.updateCurrentPage(0)
    this.dashboardService.getResults()
  }

  checkIfDateRangePresent() {
    return this.dashboardService.getRangeResolved().start !== undefined || this.dashboardService.getRangeResolved().end !== undefined
  }

  onDateRangeChange(value: any) {
    this.dashboardService.updateRange(value)
    this.dashboardService.updateCurrentPage(0)
    this.dashboardService.getResults()
  }

  getResults(event: any = []) {
    let filterArray = event;
    filterArray?.forEach((_item: any, index: string | number) => {
      filterArray[index].precedence = index
    })
    this.dashboardService.updateEvent(filterArray);
    this.dashboardService.updateCurrentPage(0)
    this.dashboardService.getResults()
  }

  onExport() {
    this.dashboardService.exportResults()
  }
}
