import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BASE_FILTERS } from 'src/app/constants/filters';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { convertObjectToDropdownArray } from 'src/app/shared/utils/typeConversion';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Output() applyFilters = new EventEmitter<any>();

  filters: any = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
  }

  addNewFilter() {
    this.filters.push({
      filter: convertObjectToDropdownArray(BASE_FILTERS)[0].value,
      value: "",
      condition: "",
      units: "",
      group: "AND"
    })
  }

  removeFilter(key: Number) {
    this.filters.splice(key, 1);
    if (this.filters.length === 0) {
      this.dashboardService.updateCurrentPage(0)
      this.dashboardService.getResults()
    }
  }

  onUpdate(event: any) {
    this.filters[event.currentIndex] = event.filterDetails;
  }

  onApply() {
    this.applyFilters.emit(this.filters)
  }

}
