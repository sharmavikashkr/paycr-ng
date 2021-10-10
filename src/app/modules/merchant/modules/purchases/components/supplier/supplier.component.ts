import { Component, OnInit } from "@angular/core";
import { Patterns } from "../../../../../../shared/patterns/patterns";
import { NotifierService } from 'angular-notifier';

@Component({
  templateUrl: "./supplier.component.html",
  styleUrls: ["./supplier.component.scss"]
})
export class SupplierComponent implements OnInit {

  constructor(
    private notifier: NotifierService,
    public patterns: Patterns) { }

  ngOnInit() {
  }

}
