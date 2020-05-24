import { Component, OnInit, ViewChild } from '@angular/core';
import { Merchant } from '../../../../../../shared/models/merchant';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Patterns } from '../../../../../../shared/patterns/patterns';
import { NgForm } from '@angular/forms';
import { SettingsService } from '../../../../../../shared/services/merchant/settings.service';
import { InvoiceSetting } from '../../../../../../shared/models/invoice-setting';
import { PaymentSetting } from '../../../../../../shared/models/payment-setting';
import { NotifierService } from 'angular-notifier';

@Component({
  templateUrl: './invoice-setting.component.html',
  styleUrls: ['./invoice-setting.component.scss']
})
export class InvoiceSettingComponent implements OnInit {

  editPaySets: boolean;
  editPayPrefs: boolean;
  newparam: any;
  @ViewChild('createParamModal') public createParamModal: ModalDirective;

  constructor(
    private notifier: NotifierService,
    public merchant: Merchant,
    public patterns: Patterns,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
  }

  newParamModal() {
    this.newparam = { name: '', provider: null };
    this.createParamModal.show();
  }

  savePaymentSetting() {
    this.settingsService.savePaymentSetting(this.merchant.paymentSetting).subscribe((response: PaymentSetting) => {
      this.merchant.paymentSetting = response;
      this.editPaySets = false;
      this.notifier.notify("success", "Settings saved successfully");
    }, error => {
      this.notifier.notify("error", error.error.message);
    });
  }

  saveInvoiceSetting() {
    this.settingsService.saveInvoiceSetting(this.merchant.invoiceSetting).subscribe((response: InvoiceSetting) => {
      this.merchant.invoiceSetting = response;
      this.editPayPrefs = false;
      this.notifier.notify("success", "Settings saved successfully");
    }, error => {
      this.notifier.notify("error", error.error.message);
    });
  }

  addParam(newParamForm: NgForm) {
    if (newParamForm.valid) {
      this.settingsService.newCustomParam(this.newparam).subscribe((response: InvoiceSetting) => {
        this.merchant.invoiceSetting = response;
        this.notifier.notify("success", "Param added successfully");
      }, error => {
        this.notifier.notify("error", error.error.message);
      });
    }
    this.createParamModal.hide();
  }

  deleteParam(id: number, paramName: string) {
    if (confirm('Delete Param: ' + paramName)) {
      this.settingsService.deleteCustomParam(id).subscribe((response: InvoiceSetting) => {
        this.merchant.invoiceSetting = response;
        this.notifier.notify("success", "Param deleted successfully");
      }, error => {
        this.notifier.notify("error", error.error.message);
      });
    };
  }

}
