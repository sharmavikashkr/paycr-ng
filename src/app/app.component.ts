import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PcApp } from './shared/models/pc-app';

@Component({
  selector: 'body',
  template: `
    <mat-progress-bar mode="query" [hidden]="!pcApp.loading"></mat-progress-bar>
    <router-outlet></router-outlet>
    <notifier-container></notifier-container>
  `
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    public pcApp: PcApp
  ) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }



}
