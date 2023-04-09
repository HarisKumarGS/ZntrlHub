import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule, NbLayoutModule, NbSelectModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { ResultsTableComponent } from 'src/app/components/results-table/results-table.component';
import { FiltersComponent } from 'src/app/components/filters/filters.component';
import { FilterItemComponent } from 'src/app/components/filters/filter-item/filter-item.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    DashboardComponent,
    ResultsTableComponent,
    FiltersComponent,
    FilterItemComponent
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
    MatTableModule,
    MatPaginatorModule,
    NbSelectModule
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
