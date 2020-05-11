import { Injectable } from "@angular/core";
import { Address } from "./address";
import { Access } from "./access";

@Injectable()
export class PcUser {
  id: number;
  created: number;
  name: string;
  email: string;
  mobile: string;
  createdBy: string;
  userType: string;
  address: Address;
  active: boolean;
  access: Access;

  deepCopy(user: PcUser) {
    this.id = user.id;
    this.created = user.created;
    this.name = user.name;
    this.email = user.email;
    this.mobile = user.mobile;
    this.createdBy = user.createdBy;
    this.userType = user.userType;
    this.address = user.address;
    this.active = user.active;
    this.access = user.access;
  }
}
