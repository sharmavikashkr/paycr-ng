import { Component, OnInit, ViewChild } from "@angular/core";
import { ReportsService } from '../../../../shared/services/merchant/reports.service';
import { Report } from '../../../../shared/models/report';
import { NotifierService } from 'angular-notifier';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { ModalDirective } from "ngx-bootstrap/modal";
import { Patterns } from '../../../../shared/patterns/patterns';
import { CommonService } from '../../../../shared/services/common/common.service';

@Component({
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.scss"],
})
export class ReportsComponent implements OnInit {

  public reports: Report[];
  public loadedReport: Report;
  public loadedReportData: any[];
  public newreport: Report = new Report();
  public timeRanges: string[] = [];
  public reportTypes: string[] = [];
  public payModes: string[] = [];
  @ViewChild("newReportModal") public newReportModal: ModalDirective;

  public lineChart4Data: Array<any> = [
    {
      data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
      label: ''
    }
  ];
  public lineChart4Labels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public lineChart4Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        points: false,
      }],
      yAxes: [{
        display: false,
      }]
    },
    elements: { point: { radius: 0 } },
    legend: {
      display: false
    }
  };
  public lineChart4Colours: Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: 'rgba(255,255,255,.55)',
      borderWidth: 2
    }
  ];
  public lineChart4Legend = false;
  public lineChart4Type = 'line';

  public barChart1Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
      label: '',
      barPercentage: 0.6
    }
  ];
  public barChart1Labels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
  public barChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart1Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.3)',
      borderWidth: 0
    }
  ];
  public barChart1Legend = false;
  public barChart1Type = 'bar';

  constructor(
    private notifier: NotifierService,
    public patterns: Patterns,
    private reportsService: ReportsService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.fetchReports();
    this.fetchTypeLists();
  }

  fetchReports() {
    this.reportsService.getReports().subscribe(response => {
      this.reports = response;
    }, error => {
      this.notifier.notify("error", error.error.message);
    });
  }

  fetchTypeLists() {
    this.commonService.typeList('timeranges').subscribe(reponse => {
      this.timeRanges = reponse;
    });
    this.commonService.typeList('reporttypes').subscribe(reponse => {
      this.reportTypes = reponse;
    });
    this.commonService.typeList('paymodes').subscribe(reponse => {
      this.payModes = reponse;
    });
  }

  newReport() {
    this.newReportModal.show();
  }

  createReport() {
    this.reportsService.createReport(this.newreport).subscribe(response => {
      this.newreport = new Report();
      this.newReportModal.hide();
      this.notifier.notify("success", "Report created successfully");
      this.fetchReports();
    }, error => {
      this.notifier.notify("error", error.error.message);
    })
  }

  loadReport(report: Report) {
    this.reportsService.loadReport(report).subscribe(response => {
      if (response == null || response.length == 0) {
        this.notifier.notify("error", "No data found");
      } else {
        this.loadedReport = report;
        this.loadedReportData = response;
      }
    }, error => {
      this.notifier.notify("error", error.error.message);
    });
  }

  scheduleReport(reportId: number) {
    this.reportsService.scheduleReport(reportId).subscribe(response => {
      this.notifier.notify("success", "Report scheduled successfully");
      this.fetchReports();
    }, error => {
      this.notifier.notify("error", error.error.message);
    });
  }

  removeSchedule(reportId: number) {
    this.reportsService.removeSchedule(reportId).subscribe(response => {
      this.notifier.notify("success", "Schedule removed successfully");
      this.fetchReports();
    }, error => {
      this.notifier.notify("error", error.error.message);
    });
  }

  deleteReport(report: Report) {
    if (confirm("Delete: " + report.name + "?")) {
      this.reportsService.deleteReport(report.id).subscribe(response => {
        this.notifier.notify("success", "Report deleted successfully");
        this.fetchReports();
      }, error => {
        this.notifier.notify("error", error.error.message);
      });
    }
  }
}
