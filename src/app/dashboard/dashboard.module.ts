import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './common/nav/nav.component';
import { provideIcons } from '@ng-icons/core';
import {
  heroPlusCircleSolid,
  heroArrowLeftCircleSolid,
} from '@ng-icons/heroicons/solid';
import { NgIconComponent } from '@ng-icons/core';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, NavComponent, AddComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgIconComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [provideIcons({ heroPlusCircleSolid, heroArrowLeftCircleSolid })],
})
export class DashboardModule {}
