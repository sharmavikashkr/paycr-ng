import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MerchantComponent } from "./merchant.component";
import { MerchantAuthGuard } from "../../shared/guards/merchantauth.guard";

const routes: Routes = [
  {
    path: "", component: MerchantComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "prefix" },
      { path: "base", loadChildren: () => import("./modules/base/base.module").then((m) => m.BaseModule) },
      { path: "buttons", loadChildren: () => import("./modules/buttons/buttons.module").then((m) => m.ButtonsModule) },
      { path: "charts", loadChildren: () => import("./modules/chartjs/chartjs.module").then((m) => m.ChartJSModule) },
      { path: "dashboard", loadChildren: () => import("./modules/dashboard/dashboard.module").then((m) => m.DashboardModule) },
      { path: "icons", loadChildren: () => import("./modules/icons/icons.module").then((m) => m.IconsModule) },
      { path: "notifications", loadChildren: () => import("./modules/notifications/notifications.module").then((m) => m.NotificationsModule) },
      { path: "theme", loadChildren: () => import("./modules/theme/theme.module").then((m) => m.ThemeModule) },
      { path: "widgets", loadChildren: () => import("./modules/widgets/widgets.module").then((m) => m.WidgetsModule) },
      { path: "reports", loadChildren: () => import("./modules/reports/reports.module").then((m) => m.ReportsModule), canActivate: [MerchantAuthGuard], data: { permission: "ops" } },
      { path: "settings", loadChildren: () => import("./modules/settings/settings.module").then((m) => m.SettingsModule), canActivate: [MerchantAuthGuard], data: { permission: "finance" } },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantRoutingModule { }
