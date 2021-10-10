import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { Patterns } from '../../../../../../shared/patterns/patterns';

@Component({
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(
    private notifier: NotifierService,
    public patterns: Patterns) { }

  ngOnInit() {
  }

}
