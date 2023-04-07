import { Component, OnInit } from '@angular/core';
import { BASE_FILTERS } from 'src/app/constants/filters';

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
      filter: 'PAGE',
      value: "",
      condition: "",
      units: "",
      group: "",
      precendence: this.filters.length + 1
    })
  }

  removeFilter(key: Number) {
    this.filters.splice(key, 1);
  }

}
