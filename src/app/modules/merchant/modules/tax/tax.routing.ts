import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TaxComponent } from "./tax.component";
import { Gstr1Component } from './components/gstr1/gstr1.component';
import { Gstr2Component } from './components/gstr2/gstr2.component';

const routes: Routes = [
  {
    path: "", component: TaxComponent,
    children: [
      { path: "", redirectTo: "gstr1", pathMatch: "prefix" },
      { path: "gstr1", component: Gstr1Component },
      { path: "gstr2", component: Gstr2Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxRoutingModule { }
