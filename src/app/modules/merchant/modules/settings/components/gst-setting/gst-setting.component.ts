import { Component, OnInit } from '@angular/core';
import { Merchant } from '../../../../../../shared/models/merchant';
import { SettingsService } from '../../../../../../shared/services/merchant/settings.service';
import { GstSetting } from '../../../../../../shared/models/gst-setting';
import { NotifierService } from 'angular-notifier';

@Component({
  templateUrl: './gst-setting.component.html'
})
export class GstSettingComponent implements OnInit {

  editTaxPrefs: boolean;

  constructor(
    private notifier: NotifierService,
    public merchant: Merchant,
    private settingsService: SettingsService) { }

  ngOnInit() {
  }

  saveGstSetting() {
    this.settingsService.saveGstSetting(this.merchant.gstSetting).subscribe((response: GstSetting) => {
      this.merchant.gstSetting = response;
      this.editTaxPrefs = false;
      this.notifier.notify("success", "Settings saved successfully");
    }, error => {
      this.notifier.notify("error", error.error.message);
    });
  }

}
