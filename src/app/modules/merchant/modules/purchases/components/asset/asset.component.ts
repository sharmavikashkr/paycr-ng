import { Component, OnInit } from "@angular/core";
import { Patterns } from "../../../../../../shared/patterns/patterns";
import { NotifierService } from 'angular-notifier';

@Component({
  templateUrl: "./asset.component.html",
  styleUrls: ["./asset.component.scss"]
})
export class AssetComponent implements OnInit {

  constructor(
    private notifier: NotifierService,
    public patterns: Patterns) { }

  ngOnInit() {
  }

}
