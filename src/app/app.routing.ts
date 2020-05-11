import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { P404Component } from "./components/error/404.component";
import { P500Component } from "./components/error/500.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { MerchantAuthGuard } from "./shared/guards/merchantauth.guard";
import { HomeComponent } from './components/home/home.component';
import { TermsComponent } from './components/home/terms/terms.component';
import { PolicyComponent } from './components/home/policy/policy.component';

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "terms", component: TermsComponent },
  { path: "policy", component: PolicyComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "merchant", loadChildren: () => import("./modules/merchant/merchant.module").then((m) => m.MerchantModule), canActivate: [MerchantAuthGuard] },
  { path: "not-found", component: P404Component },
  { path: "error", component: P500Component },
  { path: "**", redirectTo: "not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: "enabled" })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
