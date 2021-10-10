import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesRoutingModule } from './purchases.routing';
import { PurchasesComponent } from './purchases.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { AssetComponent } from './components/asset/asset.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [PurchasesComponent, ExpenseComponent, PaymentComponent, SupplierComponent, AssetComponent],
  imports: [
    CommonModule,
    PurchasesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ModalModule.forRoot()
  ]
})
export class PurchasesModule { }
