import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Report } from '../../models/report';

@Injectable()
export class ReportsService {

  constructor(@SkipSelf() private httpClient: HttpClient) { }

  getReports(): Observable<Report[]> {
    return this.httpClient.get<Report[]>(environment.APP_URL + '/reports');
  }

  loadReport(report: Report): Observable<any[]> {
    return this.httpClient.post<any[]>(environment.APP_URL + '/reports/load', report);
  }

  scheduleReport(reportId: number): Observable<any> {
    return this.httpClient.get<any>(environment.APP_URL + '/reports/schedule/add/' + reportId);
  }

  removeSchedule(reportId: number): Observable<any> {
    return this.httpClient.delete<any>(environment.APP_URL + '/reports/schedule/remove/' + reportId);
  }

  deleteReport(reportId: number): Observable<any> {
    return this.httpClient.delete<any>(environment.APP_URL + '/reports/delete/' + reportId);
  }
}
