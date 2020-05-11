import { Component, OnInit } from '@angular/core';
import { Merchant } from '../../../../../../shared/models/merchant';
import { SettingsService } from '../../../../../../shared/services/merchant/settings.service';
import { GstSetting } from '../../../../../../shared/models/gst-setting';

@Component({
  selector: 'app-gst-setting',
  templateUrl: './gst-setting.component.html',
  styleUrls: ['./gst-setting.component.scss']
})
export class GstSettingComponent implements OnInit {

  editTaxPrefs: boolean;

  constructor(
    public merchant: Merchant,
    private settingsService: SettingsService) { }

  ngOnInit() {
  }


  saveGstSetting() {
    this.settingsService.saveGstSetting(this.merchant.gstSetting).subscribe((response: GstSetting) => {
      this.merchant.gstSetting = response;
      this.editTaxPrefs = false;
    });
  }

}
