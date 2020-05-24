import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Gstr1Report } from '../../models/gstr1-report';
import { Gstr2Report } from '../../models/gstr2-report';

@Injectable()
export class TaxService {

  constructor(@SkipSelf() private httpClient: HttpClient) { }

  gstr1Report(period: string): Observable<Gstr1Report> {
    return this.httpClient.get<Gstr1Report>(environment.APP_URL + '/gst/gstr1/' + period);
  }

  downloadGstr1Report(period: string): Observable<any> {
    return this.httpClient.get<any>(environment.APP_URL + '/gst/gstr1/download/' + period);
  }

  mailGstr1Report(period: string): Observable<any> {
    return this.httpClient.get<any>(environment.APP_URL + '/gst/gstr1/mail/' + period);
  }

  gstr2Report(period: string): Observable<Gstr2Report> {
    return this.httpClient.get<Gstr2Report>(environment.APP_URL + '/gst/gstr2/' + period);
  }

  downloadGstr2Report(period: string): Observable<any> {
    return this.httpClient.get<any>(environment.APP_URL + '/gst/gstr2/download/' + period);
  }

  mailGstr2Report(period: string): Observable<any> {
    return this.httpClient.get<any>(environment.APP_URL + '/gst/gstr2/mail/' + period);
  }
}
