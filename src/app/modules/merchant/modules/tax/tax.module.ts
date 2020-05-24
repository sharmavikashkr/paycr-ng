import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxComponent } from './tax.component';
import { Gstr1Component } from './components/gstr1/gstr1.component';
import { TaxRoutingModule } from './tax.routing';
import { Gstr2Component } from './components/gstr2/gstr2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [TaxComponent, Gstr1Component, Gstr2Component],
  imports: [
    CommonModule,
    TaxRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ModalModule.forRoot()
  ]
})
export class TaxModule { }
