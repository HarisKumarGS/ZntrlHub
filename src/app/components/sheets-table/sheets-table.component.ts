import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-sheets-table',
  templateUrl: './sheets-table.component.html',
  styleUrls: ['./sheets-table.component.scss']
})
export class SheetsTableComponent implements OnInit {

  results = this.dashboardService.getSavedSheetsResultsResponse() || 0
  totalCount = this.dashboardService.getTotalSavedSheets() || 0
  pageSize = this.dashboardService.savedSheetsPerPage;
  currentPage = this.dashboardService.getCurrentSavedSheetsPageObservable()
  
  displayedColumns: string[] = ['appliedFilters', 'Link'];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
  }

  onPageChange(event: any) {
    this.dashboardService.updateCurrentSavedSheetsPage(event.pageIndex)
    this.dashboardService.getSavedSheets()
  }

  getSheetsLink(spreadSheetId: any) {
    return `https://docs.google.com/spreadsheets/d/${spreadSheetId}/`
  }

}
