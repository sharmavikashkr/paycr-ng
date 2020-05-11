import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { MerchantRoutingModule } from "./merchant.routing";
import { MerchantComponent } from "./merchant.component";
import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from "@coreui/angular";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TabsModule } from "ngx-bootstrap/tabs";
import { ChartsModule } from "ng2-charts";
import { NgbAlertModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { Merchant } from "../../shared/models/merchant";
import { TaxMaster } from "../../shared/models/tax-master";
import { SettingsService } from "../../shared/services/merchant/settings.service";
import { MerchantService } from '../../shared/services';
import { ReportsService } from '../../shared/services/merchant/reports.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MerchantRoutingModule,
    NgbDropdownModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    NgbAlertModule,
    HttpClientModule,
  ],
  declarations: [MerchantComponent],
  providers: [
    Merchant,
    TaxMaster,
    MerchantService,
    ReportsService,
    SettingsService,
  ],
})
export class MerchantModule { }
