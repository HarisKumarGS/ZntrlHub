import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BASE_FILTERS, FILTER_TEXT, GROUP_CONDITIONS, TIME_SPENT_CONDITIONS, TIME_UNITS } from 'src/app/constants/filters';
import { convertObjectToDropdownArray } from 'src/app/shared/utils/typeConversion';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss']
})
export class FilterItemComponent implements OnInit {

  @Input() currentIndex: any = 0;
  @Output() removeEvent = new EventEmitter<any>();

  baseFilter = convertObjectToDropdownArray(BASE_FILTERS)
  baseSelectedItem = convertObjectToDropdownArray(BASE_FILTERS)[0].value
  filterText: any = FILTER_TEXT; 
  timeSpentConditions = convertObjectToDropdownArray(TIME_SPENT_CONDITIONS)
  timeSpentConditionsSelectedItem = convertObjectToDropdownArray(TIME_SPENT_CONDITIONS)[0].value
  timeUnitsText = convertObjectToDropdownArray(TIME_UNITS);
  timeUnitSelectedItem = convertObjectToDropdownArray(TIME_UNITS)[0].value
  groupConditions = convertObjectToDropdownArray(GROUP_CONDITIONS);
  groupConditionsSelecteditem = convertObjectToDropdownArray(GROUP_CONDITIONS)[0].value

  constructor() { }

  ngOnInit(): void {
  }

  onRemoveFilter() {
    this.removeEvent.emit(this.currentIndex);
  }

}
