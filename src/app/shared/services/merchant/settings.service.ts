import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Merchant } from '../../models/merchant';
import { InvoiceSetting } from '../../models/invoice-setting';
import { PaymentSetting } from '../../models/payment-setting';
import { Address } from '../../models/address';
import { GstSetting } from '../../models/gst-setting';

@Injectable()
export class SettingsService {

  constructor(@SkipSelf() private httpClient: HttpClient) { }

  saveAccount(name: string, gstin: string): Observable<Merchant> {
    const body = new HttpParams()
      .set('name', name)
      .set('gstin', gstin);
    return this.httpClient.post<Merchant>(environment.APP_URL + '/merchant/account/update',
      body.toString(),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      });
  }

  saveAddress(address: Address): Observable<Merchant> {
    return this.httpClient.post<Merchant>(environment.APP_URL + '/merchant/address/update', address);
  }

  saveInvoiceSetting(invoiceSetting: InvoiceSetting): Observable<InvoiceSetting> {
    return this.httpClient.post<InvoiceSetting>(environment.APP_URL + '/merchant/invoicesetting/update', invoiceSetting);
  }

  savePaymentSetting(paymentSetting: PaymentSetting): Observable<PaymentSetting> {
    return this.httpClient.post<PaymentSetting>(environment.APP_URL + '/merchant/paymentsetting/update', paymentSetting);
  }

  saveGstSetting(gstSetting: GstSetting): Observable<GstSetting> {
    return this.httpClient.post<GstSetting>(environment.APP_URL + '/merchant/gstsetting/update', gstSetting);
  }

  newCustomParam(newParam: any): Observable<InvoiceSetting> {
    return this.httpClient.put<InvoiceSetting>(environment.APP_URL + '/merchant/customParam/new', newParam);
  }

  deleteCustomParam(paramId: number): Observable<InvoiceSetting> {
    return this.httpClient.delete<InvoiceSetting>(environment.APP_URL + '/merchant/customParam/delete/' + paramId);
  }
}
