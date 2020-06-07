
export class Gstr2Report {
    period: string;
    b2bR: Gstr2B2BR[];
    b2bUr: Gstr2B2BUR[];
    b2bRNote: Gstr2B2BRNote[];
    b2bUrNote: Gstr2B2BURNote[];
    nil: Gstr2Nil[];
}

interface Gstr2B2BR {
    gstin: string;
    invoiceNo: string;
    taxableAmount: number;
    invoiceAmount: number;
    invoiceDate: Date;
    placeOfSupply: string;
    supplyType: string;
    taxAmount: TaxAmount[];
}

interface Gstr2B2BUR {
    invoiceNo: string;
    taxableAmount: number;
    invoiceAmount: number;
    invoiceDate: Date;
    placeOfSupply: string;
    supplyType: string;
    taxAmount: TaxAmount[];
}

interface Gstr2B2BRNote {
    gstin: string;
    invoiceNo: string;
    taxableAmount: number;
    invoiceAmount: number;
    invoiceDate: Date;
    placeOfSupply: string;
    supplyType: string;
    taxAmount: TaxAmount[];
}

interface Gstr2B2BURNote {
    gstin: string;
    noteNo: string;
    taxableAmount: number;
    noteAmount: number;
    noteDate: Date;
    noteType: string;
    invoiceNo: string;
    invoiceDate: Date;
    supplyType: string;
    noteReason: string;
    taxAmount: TaxAmount[];
}

interface Gstr2Nil {
    nilRated: string;
    exempted: string;
    nonGst: string;
}

interface TaxAmount {
    amount: number;
    tax: Tax;
}

interface Tax {
    name: string;
    value: number;
}