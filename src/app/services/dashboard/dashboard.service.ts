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
  isFiltersLoading = new BehaviorSubject(false);

  buttons = new BehaviorSubject([]);
  pages = new BehaviorSubject([]);

  results = new BehaviorSubject(MOCK_RESULTS);

  constructor(private http: HttpClient, private toastrService: NbToastrService) { }

  getResults(event: any, rangeStart: any, rangeEnd: any) {
    // if (rangeStart !== undefined && rangeEnd !== undefined) {
    //   console.log(rangeStart.getTime()/1000)
    //   console.log(rangeEnd.getTime()/1000)
    // }
    return this.results
  }

  exportResults(event: any, rangeStart: any, rangeEnd: any) {
    console.log('Export')
    this.toastrService.show(
      'Please check your google drive',
      'Results are being exported',
      { duration: 2000, position: NbGlobalPhysicalPosition.BOTTOM_RIGHT, status: 'success' });
  }

  getButtons(): Observable<any> {
    return this.buttons
  }

  getPages(): Observable<any> {
    return this.pages
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
}
