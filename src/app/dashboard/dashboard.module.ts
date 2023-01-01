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
import { AddCategoryComponent } from './category/add/add.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    AddComponent,
    AddCategoryComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgIconComponent,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatTabsModule,
  ],
  providers: [provideIcons({ heroPlusCircleSolid, heroArrowLeftCircleSolid })],
})
export class DashboardModule {}
