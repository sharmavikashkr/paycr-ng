import { TaxMaster } from './tax-master';

export class Pricing {
    id: number;
    created: number;
    code: string;
    name: string;
    description: string;
    limit: number;
    rate: number;
    duration: number;
    type: string;
    hsnsac: string;
    interstateTax: TaxMaster;
    intrastateTax: TaxMaster;
    active: boolean;

    deepCopy(p: Pricing) {
        this.id = p.id;
        this.created = p.created;
        this.code = p.code;
        this.name = p.name;
        this.description = p.description;
        this.limit = p.limit;
        this.rate = p.rate;
        this.duration = p.duration;
        this.type = p.type;
        this.hsnsac = p.hsnsac;
        this.interstateTax = p.interstateTax;
        this.intrastateTax = p.intrastateTax;
        this.active = p.active;
    }
}
