import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { Patterns } from '../../../../../../shared/patterns/patterns';
import { TaxService } from '../../../../../../shared/services/merchant/tax.service';
import { Gstr2Report } from '../../../../../../shared/models/gstr2-report';
import * as moment from 'moment';
import { FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';

export const MY_FORMATS = {
  parse: {
    dateInput: 'MMM - YYYY',
  },
  display: {
    dateInput: 'MMM - YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  templateUrl: './gstr2.component.html',
  styleUrls: ['./gstr2.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class Gstr2Component implements OnInit {
  public period: string;
  public gstr2Report: Gstr2Report;
  public date = new FormControl(moment());

  constructor(
    private notifier: NotifierService,
    public patterns: Patterns,
    private taxService: TaxService) { }

  ngOnInit() {
    this.period = this.date.value.format('MM-YYYY');
  }

  chosenYearHandler(normalizedYear: moment.Moment) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: moment.Moment, datepicker: MatDatepicker<moment.Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);
    this.period = this.date.value.format('MM-YYYY');
    datepicker.close();
  }

  loadGstr2Report() {
    this.taxService.gstr2Report(this.period).subscribe(response => {
      this.gstr2Report = response;
    }, error => {
      this.notifier.notify("error", error.error.message);
    });
  }

  downloadGstr2Report() {
    this.taxService.downloadGstr2Report(this.period).subscribe(response => {

    }, error => {
      this.notifier.notify("error", error.error.message);
    });
  }

  mailGstr2Report() {
    this.taxService.mailGstr2Report(this.period).subscribe(response => {
      this.notifier.notify("success", "GSTR2 Report Mailed successfully");
    }, error => {
      this.notifier.notify("error", error.error.message);
    });
  }

}
