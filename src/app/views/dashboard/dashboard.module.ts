import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { ResultsTableComponent } from 'src/app/components/results-table/results-table.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ResultsTableComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NbCardModule,
    NbDatepickerModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    FormsModule,
    MatTableModule
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
