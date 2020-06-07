
export class Gstr1Report {
    period: string;
    b2cSmall: B2CSmall[];
    b2cLarge: B2CLarge[];
    b2b: B2B[];
    b2cNote: B2XNote[];
    b2bNote: B2XNote[];
    nil: Nil[];
}

interface B2CSmall {
    supplyType: string;
    gstRate: number;
    taxableAmount: number;
    cgstAmount: number;
    sgstAmount: number;
    igstAmount: number;
}

interface B2CLarge {
    invoiceNo: string;
    taxableAmount: number;
    invoiceAmount: number;
    invoiceDate: Date;
    placeOfSupply: string;
    supplyType: string;
    taxAmount: TaxAmount[];
}

interface B2B {
    gstin: string;
    invoiceNo: string;
    taxableAmount: number;
    invoiceAmount: number;
    invoiceDate: Date;
    placeOfSupply: string;
    supplyType: string;
    taxAmount: TaxAmount[];
}

interface B2XNote {
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

interface Nil {
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