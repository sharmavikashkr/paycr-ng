import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Token } from "../../shared/models/token";
import { CookieService } from "ngx-cookie-service";
import { AccessService } from "../../shared/services/merchant/access.service";
import { CommonService } from "../../shared/services/common/common.service";
import { PcUser } from "../../shared/models/pc-user";
import { NotifierService } from 'angular-notifier';

@Component({
  templateUrl: "login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  private code: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private notifier: NotifierService,
    private token: Token,
    private user: PcUser,
    private accessService: AccessService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.code = params.code;
      if (this.code != null) {
        this.getAccessToken();
      }
    });
  }

  login() {
    if (localStorage.getItem("ACCESS_TOKEN") != null) {
      this.onLoggedin();
    } else {
      this.accessService.authorize();
    }
  }

  getAccessToken() {
    this.accessService.getAccessToken(this.code).subscribe((response) => {
      if (response == null) {
        this.relogin();
      } else {
        this.token.deepCopy(response);
        localStorage.setItem("ACCESS_TOKEN", this.token.access_token);
        this.onLoggedin();
      }
    }, error => {
      this.relogin();
    });
  }

  onLoggedin() {
    this.commonService.getUser().subscribe((response) => {
      if (response == null) {
        this.relogin();
      } else {
        this.notifier.notify("success", "Login Successful. Redirecting to dashboard..");
        this.user.deepCopy(response);
        this.router.navigate(["/merchant"]);
      }
    }, error => {
      this.relogin();
    });
  }

  relogin() {
    localStorage.removeItem("ACCESS_TOKEN");
    // this.accessService.authorize();
    this.notifier.notify("error", "Authentication Failed. Kindly retry..");
  }
}
