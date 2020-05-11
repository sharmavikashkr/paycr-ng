import { MerchantCustomParams } from './merchant-custom-params';

export class InvoiceSetting {
    id: number;
    sendSms: boolean;
    sendEmail: boolean;
    addItems: boolean;
    emailPdf: boolean;
    refundCreditNote: boolean;
    ccMe: boolean;
    autoRemind: boolean;
    remindDays: number;
    expiryDays: number;
    emailNote: string;
    emailSubject: string;
    customParams: MerchantCustomParams[];

    deepCopy(is: InvoiceSetting) {
        this.id = is.id;
        this.sendSms = is.sendSms;
        this.sendEmail = is.sendEmail;
        this.addItems = is.addItems;
        this.emailPdf = is.emailPdf;
        this.refundCreditNote = is.refundCreditNote;
        this.ccMe = is.ccMe;
        this.autoRemind = is.autoRemind;
        this.remindDays = is.remindDays;
        this.expiryDays = is.expiryDays;
        this.emailNote = is.emailNote;
        this.emailSubject = is.emailSubject;
        this.customParams = is.customParams;
    }
}
