import { Component, OnInit } from '@angular/core';
import { BASE_FILTERS } from 'src/app/constants/filters';
import { convertObjectToDropdownArray } from 'src/app/shared/utils/typeConversion';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  filters: any = [];

  constructor() { }

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
  }

  onUpdate(event: any) {
    this.filters[event.currentIndex] = event.filterDetails;
  }

}
