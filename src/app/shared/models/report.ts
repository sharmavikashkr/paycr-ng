import { Merchant } from './merchant';
import { NullTemplateVisitor } from '@angular/compiler';

export class Report {
    id: number = null;
    created: Date = null;
    name: string = null;
    description: string = null;
    timeRange: string = null;
    reportType: string = null;
    payType: string = null;
    payMode: string = null;
    mobile: string = null;
    merchant: Merchant = null;
    schedule: any = null;
}
