import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { AccountComponent } from './components/account/account.component';
import { SettingsRoutingModule } from './settings.routing';
import { InvoiceSettingComponent } from './components/invoice-setting/invoice-setting.component';
import { GstSettingComponent } from './components/gst-setting/gst-setting.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [SettingsComponent, AccountComponent, InvoiceSettingComponent, GstSettingComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ]
})
export class SettingsModule { }
