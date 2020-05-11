import { Pricing } from './pricing';

export class MerchantPricing {
    id: number;
    created: number;
    startDate: number;
    endDate: number;
    quantity: number;
    status: string;
    pricing: Pricing;

    deepCopy(mp: MerchantPricing) {
        this.id = mp.id;
        this.created = mp.created;
        this.startDate = mp.startDate;
        this.endDate = mp.endDate;
        this.quantity = mp.quantity;
        this.status = mp.status;
        this.pricing = new Pricing();
        this.pricing.deepCopy(mp.pricing);
    }
}
