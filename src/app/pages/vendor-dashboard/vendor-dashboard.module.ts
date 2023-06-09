import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorDashboardRoutingModule } from './vendor-dashboard-routing.module';
import { VendorDashboardComponent } from './vendor-dashboard.component';


@NgModule({
  declarations: [
    VendorDashboardComponent
  ],
  imports: [
    CommonModule,
    VendorDashboardRoutingModule
  ]
})
export class VendorDashboardModule { }
