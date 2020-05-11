import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { Router } from "@angular/router";
import { PcUser } from "../models/pc-user";
import { CommonService } from '../services/common/common.service';

@Injectable()
export class MerchantAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private user: PcUser,
    private commonService: CommonService
  ) { }

  canActivate(next: ActivatedRouteSnapshot): Promise<boolean> | boolean {
    if (localStorage.getItem("ACCESS_TOKEN") != null) {
      return this.loadUserAndCheckAccess(next);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
      this.router.navigate(["/login"]);
      return false;
    }
  }

  loadUserAndCheckAccess(next: ActivatedRouteSnapshot): Promise<boolean> | boolean {
    if (this.user == null || this.user.access == null) {
      return this.commonService.getUser()
        .toPromise()
        .then(response => {
          if (response == null) {
            this.router.navigate(["/login"]);
            return false;
          } else {
            this.user.deepCopy(response);
            return this.checkAccess(next);
          }
        })
        .catch(error => {
          this.router.navigate(["/login"]);
          return false;
        });
    } else {
      return this.checkAccess(next);
    }
  }

  checkAccess(next: ActivatedRouteSnapshot): boolean {
    if (next.children[0] != null) {
      if (
        next.children[0].data.permission == null ||
        this.user.access[next.children[0].data.permission]
      ) {
        return true;
      }
    }
    return false;
  }
}
