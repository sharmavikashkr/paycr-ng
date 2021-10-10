import { Component, OnInit } from "@angular/core";
import { Patterns } from "../../../../../../shared/patterns/patterns";
import { NotifierService } from 'angular-notifier';

@Component({
  templateUrl: "./consumer.component.html",
  styleUrls: ["./consumer.component.scss"]
})
export class ConsumerComponent implements OnInit {

  constructor(
    private notifier: NotifierService,
    public patterns: Patterns) { }

  ngOnInit() {
  }

}
