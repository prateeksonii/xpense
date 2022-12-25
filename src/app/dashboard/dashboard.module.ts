import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './common/nav/nav.component';
import { provideIcons } from '@ng-icons/core';
import { heroPlusCircleSolid } from '@ng-icons/heroicons/solid';
import { NgIconComponent } from '@ng-icons/core';

@NgModule({
  declarations: [HomeComponent, NavComponent],
  imports: [CommonModule, DashboardRoutingModule, NgIconComponent],
  providers: [provideIcons({ heroPlusCircleSolid })],
})
export class DashboardModule {}
