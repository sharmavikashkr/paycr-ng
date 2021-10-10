import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PurchasesComponent } from "./purchases.component";
import { ExpenseComponent } from './components/expense/expense.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { AssetComponent } from './components/asset/asset.component';

const routes: Routes = [
  {
    path: "", component: PurchasesComponent,
    children: [
      { path: "", redirectTo: "expenses", pathMatch: "prefix" },
      { path: "expenses", component: ExpenseComponent },
      { path: "payments", component: PaymentComponent },
      { path: "suppliers", component: SupplierComponent },
      { path: "assets", component: AssetComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchasesRoutingModule { }
