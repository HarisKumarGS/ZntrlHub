import { Injectable } from '@angular/core';
import { MOCK_RESULTS } from 'src/app/constants/mock';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  isButtonsLoading = new BehaviorSubject(false);
  isPagesLoading = new BehaviorSubject(false);
  isResultsLoading = new BehaviorSubject(false);

  buttons = new BehaviorSubject([]);
  pages = new BehaviorSubject([]);

  results = new BehaviorSubject([]);
  currentPage = new BehaviorSubject(0);
  totalResults = new BehaviorSubject(0);
  resultsPerPage = 10;

  event = new BehaviorSubject([]);
  range = new BehaviorSubject({
    start: undefined,
    end: undefined
  });

  constructor(private http: HttpClient, private toastrService: NbToastrService) { }

  updateEvent(value: any) {
    this.event.next(value)
  }

  updateRange(value: any) {
    this.range.next(value);
  }

  updateCurrentPage(value: any) {
    this.currentPage.next(value);
  }

  getEvent(): Observable<any> {
    return this.event
  }

  getRangeResolved() {
    return this.range.value;
  }

  getRange(): Observable<any> {
    return this.range
  }

  getTotalResults(): Observable<any> {
    return this.totalResults
  }

  getCurrentPageObservable() {
    return this.currentPage
  }

  getCurrentPage() {
    return this.currentPage.value
  }

  getButtons(): Observable<any> {
    return this.buttons
  }

  getPages(): Observable<any> {
    return this.pages
  }

  getResultsResponse(): Observable<any> {
    return this.results
  }

  getButtonsEvents() {
    this.isButtonsLoading.next(true)
    this.http.get(`${environment.apiUrl}/buttons`).subscribe((response: any) => {
      this.buttons.next(response.results)
      this.isButtonsLoading.next(false)
    })
  }

  getPagesEvents() {
    this.isPagesLoading.next(true)
    this.http.get(`${environment.apiUrl}/pages`).subscribe((response: any) => {
      this.pages.next(response.results)
      this.isPagesLoading.next(false)
    })
  }

  getResults() {

    this.isResultsLoading.next(true)
    let baseUrl = `${environment.apiUrl}/analytics?page=${this.currentPage.value}&resultsPerPage=${this.resultsPerPage}`;

    if(this.range.value.start !== undefined && this.range.value.end !== undefined) {
      let startDate = new Date(Date.parse(this.range.value.start!)).toISOString()
      let endDate = new Date(Date.parse(this.range.value.end!)).toISOString()
      baseUrl = `${baseUrl}&date_gte=${startDate}&date_lte=${endDate}`
    }

    this.http.post(baseUrl, this.event.value).subscribe((response: any) => {
      this.results.next(response.results)
      this.totalResults.next(response.count)
      this.isResultsLoading.next(false)
    })
  }

  exportResults() {
    this.toastrService.show(
      'Will be Downloaded in sometime',
      'Results are being exported',
      { duration: 2000, position: NbGlobalPhysicalPosition.BOTTOM_RIGHT, status: 'success' });
    
    let baseUrl = `${environment.apiUrl}/analytics/export?page=${this.currentPage.value}&resultsPerPage=${this.resultsPerPage}`;

    if(this.range.value.start !== undefined && this.range.value.end !== undefined) {
      let startDate = new Date(Date.parse(this.range.value.start!)).toISOString()
      let endDate = new Date(Date.parse(this.range.value.end!)).toISOString()
      baseUrl = `${baseUrl}&date_gte=${startDate}&date_lte=${endDate}`
    }

    this.http.post(baseUrl, this.event.value, {
      responseType: 'text'
    }).subscribe((response: any) => {
      const url = window.URL.createObjectURL(new Blob([response]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Reports.csv');
      document.body.appendChild(link);
      link.click();
      link.remove();
    })
  }
}
