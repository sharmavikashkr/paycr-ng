import { Injectable } from '@angular/core';
import { Address } from './address';
import { MerchantPricing } from './merchant-pricing';
import { InvoiceSetting } from './invoice-setting';
import { PaymentSetting } from './payment-setting';
import { GstSetting } from './gst-setting';
import { MerchantModule } from '../../modules/merchant/merchant.module';

@Injectable()
export class Merchant {
    id: number;
    created: number;
    name: string;
    email: string;
    mobile: string;
    accessKey: string;
    secretKey: string;
    gstin: string;
    active: boolean;
    banner: string;
    address: Address;
    pricings: MerchantPricing[];
    invoiceSetting: InvoiceSetting;
    paymentSetting: PaymentSetting;
    gstSetting: GstSetting;

    deepCopy(mer: Merchant) {
        this.id = mer.id;
        this.created = mer.created;
        this.name = mer.name;
        this.email = mer.email;
        this.mobile = mer.email;
        this.accessKey = mer.accessKey;
        this.secretKey = mer.secretKey;
        this.gstin = mer.gstin;
        this.active = mer.active;
        this.banner = mer.banner;
        this.address = mer.address;
        this.pricings = mer.pricings;
        this.invoiceSetting = mer.invoiceSetting;
        this.paymentSetting = mer.paymentSetting;
        this.gstSetting = mer.gstSetting;
    }
}
