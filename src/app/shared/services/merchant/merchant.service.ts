import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Merchant } from '../../models/merchant';

@Injectable()
export class MerchantService {

  constructor(@SkipSelf() private httpClient: HttpClient) { }

  getMerchant(): Observable<Merchant> {
    return this.httpClient.get<Merchant>(environment.APP_URL + '/merchant/get');
  }
}
