export class Address {
    id: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
    type: string;

    deepCopy(addr: Address) {
        this.id = addr.id;
        this.addressLine1 = addr.addressLine1;
        this.addressLine2 = addr.addressLine2;
        this.city = addr.city;
        this.state = addr.state;
        this.country = addr.country;
        this.pincode = addr.pincode;
        this.type = addr.type;
    }
}
