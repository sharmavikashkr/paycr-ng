import { Injectable } from '@angular/core';

@Injectable()
export class TaxMaster {
    id: number;
    name: string;
    value: number;
    active: boolean;
    child: boolean;
    parent: TaxMaster;
}
