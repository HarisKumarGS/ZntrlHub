import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { formatDate } from 'src/app/shared/utils/dateFormat';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.scss']
})
export class ResultsTableComponent implements OnInit {

  results = this.dashboardService.getResultsResponse() || 0
  totalCount = this.dashboardService.getTotalResults() || 0
  pageSize = this.dashboardService.resultsPerPage;
  currentPage = this.dashboardService.getCurrentPageObservable()
  
  displayedColumns: string[] = ['customer', 'whatsappNumber' ,'pageTitle', 'pageUrl','timeStayed', 'buttonClick', 'location', 'timezone', 'device_type', 'browser_name', 'dateTime'];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
  }

  formatDateCreated(date: any) {
    return formatDate(date)
  }

  onPageChange(event: any) {
    this.dashboardService.updateCurrentPage(event.pageIndex)
    this.dashboardService.getResults()
  }

  getButtonClicked(element: any) {
    if(element && element.button_clicked && element.button_clicked.flag && element.button_clicked.button_name) {
      return element.button_clicked.button_name
    } else {
      return '-'
    }
  }

  stringToNumber(value: any) {
    return parseFloat(value).toFixed(2);
  }

}
