import { Injectable } from '@angular/core';
import { MOCK_RESULTS } from 'src/app/constants/mock';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  isLoading: boolean = false;

  constructor() { }

  getResults() {
    return MOCK_RESULTS
  }
}
