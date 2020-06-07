import { Component, OnInit } from "@angular/core";
import { Merchant } from "../../shared/models/merchant";
import { MerchantService } from "../../shared/services";
import { PcUser } from "../../shared/models/pc-user";
import { navItems } from "./_nav";
import { INavData } from "@coreui/angular";
import { Router } from "@angular/router";
import { PcApp } from '../../shared/models/pc-app';

@Component({
  selector: "app-merchant",
  templateUrl: "./merchant.component.html",
  styleUrls: ["./merchant.component.scss"],
})
export class MerchantComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems: INavData[] = [];
  collapedSideBar: boolean;
  public loaded = false;

  constructor(
    public router: Router,
    public pcApp: PcApp,
    public merchant: Merchant,
    public user: PcUser,
    private merchantService: MerchantService
  ) { }

  ngOnInit() {
    this.merchantService.getMerchant().subscribe((response) => {
      this.merchant.deepCopy(response);
    }, () => {
      this.logout();
    });
    this.loadNavs();
  }

  loadNavs() {
    navItems.forEach((n, i) => {
      if (
        (n.attributes != null &&
          n.attributes.permission != null &&
          this.user.access[n.attributes.permission]) ||
        n.attributes == null ||
        n.attributes.permission == null
      ) {
        this.navItems.push(n);
        if (n.children != null) {
          let children = [];
          n.children.forEach((c, j) => {
            if (
              (c.attributes != null &&
                c.attributes.permission != null &&
                this.user.access[c.attributes.permission]) ||
              c.attributes == null ||
              c.attributes.permission == null
            ) {
              children.push(c);
            }
            if (j == n.children.length - 1) {
              n.children = children;
            }
          });
        }
      }
      if (i == navItems.length - 1) {
        this.loaded = true;
      }
    });
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    localStorage.removeItem("ACCESS_TOKEN");
    this.router.navigate(["/login"]);
  }
}
