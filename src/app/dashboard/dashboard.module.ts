import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './common/nav/nav.component';

@NgModule({
  declarations: [HomeComponent, NavComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
