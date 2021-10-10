import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales.component';
import { SalesRoutingModule } from './sales.routing';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ConsumerComponent } from './components/consumer/consumer.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [SalesComponent, InvoiceComponent, PaymentComponent, ConsumerComponent, InventoryComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ModalModule.forRoot()
  ]
})
export class SalesModule { }
