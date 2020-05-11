import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SettingsComponent } from "./settings.component";
import { AccountComponent } from "./components/account/account.component";
import { InvoiceSettingComponent } from "./components/invoice-setting/invoice-setting.component";
import { GstSettingComponent } from "./components/gst-setting/gst-setting.component";

const routes: Routes = [
  {
    path: "", component: SettingsComponent,
    children: [
      { path: "", redirectTo: "account", pathMatch: "prefix" },
      { path: "account", component: AccountComponent },
      { path: "invoice", component: InvoiceSettingComponent },
      { path: "gst", component: GstSettingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule { }
