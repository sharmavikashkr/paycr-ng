import { Component } from "@angular/core";
import { Patterns } from "../../shared/patterns/patterns";
import { Register } from '../../shared/models/register';
import { AccessService } from '../../shared/services/merchant/access.service';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';

@Component({
  templateUrl: "register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  public merchant: Register;
  constructor(
    private router: Router,
    public patterns: Patterns,
    private notifier: NotifierService,
    private accessService: AccessService
  ) {
    this.merchant = {
      name: '',
      email: '',
      mobile: ''
    }
  }

  register() {
    this.accessService.register(this.merchant).subscribe(Response => {
      this.notifier.notify("success", "Registered Successfully.");
      this.router.navigate(["/login"]);
    }, error => {
      this.notifier.notify("error", JSON.stringify(error.error.message));
    })
  }
}
