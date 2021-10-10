import { Component, OnInit } from "@angular/core";
import { Patterns } from "../../../../../../shared/patterns/patterns";
import { NotifierService } from 'angular-notifier';

@Component({
  templateUrl: "./invoice.component.html",
  styleUrls: ["./invoice.component.scss"]
})
export class InvoiceComponent implements OnInit {

  constructor(
    private notifier: NotifierService,
    public patterns: Patterns) { }

  ngOnInit() {
  }

}
