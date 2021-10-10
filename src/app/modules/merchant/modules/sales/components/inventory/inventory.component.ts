import { Component, OnInit } from "@angular/core";
import { Patterns } from "../../../../../../shared/patterns/patterns";
import { NotifierService } from 'angular-notifier';

@Component({
  templateUrl: "./inventory.component.html",
  styleUrls: ["./inventory.component.scss"]
})
export class InventoryComponent implements OnInit {

  constructor(
    private notifier: NotifierService,
    public patterns: Patterns) { }

  ngOnInit() {
  }

}
