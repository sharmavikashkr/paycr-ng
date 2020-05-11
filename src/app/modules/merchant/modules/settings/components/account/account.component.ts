import { Component, OnInit, ViewChild } from "@angular/core";
import { Merchant } from "../../../../../../shared/models/merchant";
import { environment } from "../../../../../../../environments/environment";
import { ModalDirective } from "ngx-bootstrap/modal";
import { Address } from "../../../../../../shared/models/address";
import { SettingsService } from "../../../../../../shared/services/merchant/settings.service";
import { Patterns } from "../../../../../../shared/patterns/patterns";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.scss"],
})
export class AccountComponent implements OnInit {
  appUrl: string;
  editAccSets: boolean;
  address: Address;
  @ViewChild("editAccAddressModal") public editAccAddressModal: ModalDirective;

  constructor(
    public merchant: Merchant,
    public patterns: Patterns,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.appUrl = environment.APP_URL;
    this.address = new Address();
  }

  setDefaultAddress() {
    if (this.merchant.address != null) {
      this.address.deepCopy(this.merchant.address);
    }
    this.editAccAddressModal.show();
  }

  clearInputFiles() { }

  updateAccount(accountForm: NgForm) {
    if (!accountForm.valid) {
      return;
    }
    this.settingsService
      .saveAccount(this.merchant.name, this.merchant.gstin)
      .subscribe((response: Merchant) => {
        this.merchant.deepCopy(response);
        this.editAccSets = false;
      });
  }

  saveAddress() {
    this.settingsService
      .saveAddress(this.address)
      .subscribe((response: Merchant) => {
        this.merchant.deepCopy(response);
      });
    this.address = new Address();
    this.editAccAddressModal.hide();
  }
}
