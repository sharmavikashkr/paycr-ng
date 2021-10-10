import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SalesComponent } from "./sales.component";
import { InvoiceComponent } from './components/invoice/invoice.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ConsumerComponent } from './components/consumer/consumer.component';
import { InventoryComponent } from './components/inventory/inventory.component';

const routes: Routes = [
  {
    path: "", component: SalesComponent,
    children: [
      { path: "", redirectTo: "invoices", pathMatch: "prefix" },
      { path: "invoices", component: InvoiceComponent },
      { path: "payments", component: PaymentComponent },
      { path: "consumers", component: ConsumerComponent },
      { path: "inventory", component: InventoryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule { }
