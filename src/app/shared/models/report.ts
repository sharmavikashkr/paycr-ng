import { Merchant } from './merchant';

export class Report {
    id: number;
    created: Date;
    name: string;
    description: string;
    timeRange: string;
    reportType: string;
    payType: string;
    payMode: string;
    mobile: string;
    merchant: Merchant;
    schedule: any;
}
