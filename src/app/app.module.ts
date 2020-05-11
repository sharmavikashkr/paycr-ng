import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppAsideModule, AppBreadcrumbModule, AppHeaderModule, AppFooterModule, AppSidebarModule } from "@coreui/angular";
import { NgbAlertModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { NotifierModule } from "angular-notifier";
import { CookieService } from "ngx-cookie-service";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { HomeComponent } from "./components/home/home.component";
import { TermsComponent } from "./components/home/terms/terms.component";
import { PolicyComponent } from "./components/home/policy/policy.component";
import { P404Component } from "./components/error/404.component";
import { P500Component } from "./components/error/500.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { MerchantAuthGuard } from "./shared/guards/merchantauth.guard";

// Import 3rd party components
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TabsModule } from "ngx-bootstrap/tabs";
import { ChartsModule } from "ng2-charts";
import { CommonService } from "./shared/services/common/common.service";
import { AccessInterceptor } from "./shared/interceptors/access.interceptor";
import { PcUser } from "./shared/models/pc-user";

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    NgbAlertModule,
    HttpClientModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right'
        }
      }
    }),
    NgbModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TermsComponent,
    PolicyComponent,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AccessInterceptor, multi: true },
    MerchantAuthGuard,
    CommonService,
    CookieService,
    PcUser,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }