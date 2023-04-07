import { Component, Input, OnInit } from '@angular/core';
import { formatDate } from 'src/app/shared/utils/dateFormat';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.scss']
})
export class ResultsTableComponent implements OnInit {

  @Input() results: any = [];
  
  displayedColumns: string[] = ['pageTitle', 'pageUrl', 'location', 'timezone', 'device_type', 'browser_name', 'dateTime'];

  constructor() { }

  ngOnInit(): void {
  }

  formatDateCreated(date: any) {
    return formatDate(date)
  }

}
