import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PcApp } from './shared/models/pc-app';

@Component({
  selector: 'body',
  template: `
    <router-outlet></router-outlet>
    <notifier-container></notifier-container>
  `
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router
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
