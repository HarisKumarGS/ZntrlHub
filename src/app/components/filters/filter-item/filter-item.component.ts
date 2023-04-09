import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BASE_FILTERS, FILTER_TEXT, GROUP_CONDITIONS, TIME_SPENT_CONDITIONS, TIME_UNITS } from 'src/app/constants/filters';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { convertObjectToDropdownArray } from 'src/app/shared/utils/typeConversion';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss']
})
export class FilterItemComponent implements OnInit {

  @Input() filterDetails: any;
  @Input() currentIndex: any = 0;
  @Output() removeEvent = new EventEmitter<any>();
  @Output() updateEvent = new EventEmitter<any>();

  baseFilter = convertObjectToDropdownArray(BASE_FILTERS)
  baseSelectedItem = convertObjectToDropdownArray(BASE_FILTERS)[0].value
  filterText: any = FILTER_TEXT; 
  timeSpentConditions = convertObjectToDropdownArray(TIME_SPENT_CONDITIONS)
  timeSpentConditionsSelectedItem = convertObjectToDropdownArray(TIME_SPENT_CONDITIONS)[0].value
  timeUnitsText = convertObjectToDropdownArray(TIME_UNITS);
  timeUnitSelectedItem = convertObjectToDropdownArray(TIME_UNITS)[0].value
  groupConditions = convertObjectToDropdownArray(GROUP_CONDITIONS);
  groupConditionsSelecteditem = convertObjectToDropdownArray(GROUP_CONDITIONS)[0].value
  buttons = this.dashboardService.getButtons()
  pages = this.dashboardService.getPages()

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
  }

  onRemoveFilter() {
    this.removeEvent.emit(this.currentIndex);
  }

  onBaseFilterChange(event: any) {
    this.filterDetails.filter = event
    if(event === 'PAGE') {
      this.filterDetails.value = ''
      this.filterDetails.condition = ''
      this.filterDetails.units = ''
    }
    if(event === 'TIME_SPENT') {
      this.filterDetails.condition = 'GREATER_THAN'
      this.filterDetails.units = 'HOURS'
      this.filterDetails.value = ''
    }
    if(event === 'BUTTON_CLICK') {
      this.filterDetails.value = ''
      this.filterDetails.condition = ''
      this.filterDetails.units = ''
    }
    this.updateEvent.emit({
      currentIndex: this.currentIndex,
      filterDetails: this.filterDetails
    })
  }

  onGroupConditionChange(event: any) {
    this.filterDetails.group = event;
    this.updateEvent.emit({
      currentIndex: this.currentIndex,
      filterDetails: this.filterDetails
    })
  }

  onValueChange(event: any) {
    this.filterDetails.value = event
    this.updateEvent.emit({
      currentIndex: this.currentIndex,
      filterDetails: this.filterDetails
    })
  }

  onUnitChange(event: any) {
    this.filterDetails.units = event
    this.updateEvent.emit({
      currentIndex: this.currentIndex,
      filterDetails: this.filterDetails
    })
  }

  onConditionChange(event: any) {
    this.filterDetails.condition = event
    this.updateEvent.emit({
      currentIndex: this.currentIndex,
      filterDetails: this.filterDetails
    })
  }
}
