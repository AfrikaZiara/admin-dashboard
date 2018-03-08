import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { TableTourOperatorsComponent } from './table-tour-operators/table-tour-operators.component';
import { TableTouristsComponent } from './table-tourists/table-tourists.component';
import { TableTourBookingsComponent } from './table-tour-bookings/table-tour-bookings.component';
import { TableTourPackagesComponent } from './table-tour-packages/table-tour-packages.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [{
    path: 'smart-table',
    component: SmartTableComponent,
  },
  {
    path: 'table-tour-operators',
    component: TableTourOperatorsComponent,
  },
  {
    path: 'table-tourists',
    component: TableTouristsComponent,
  },
  {
    path: 'table-tour-bookings',
    component: TableTourBookingsComponent,
  },
  {
    path: 'table-tour-packages',
    component: TableTourPackagesComponent,
  }
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  SmartTableComponent,
  TableTourOperatorsComponent,
  TableTouristsComponent,
  TableTourBookingsComponent,
  TableTourPackagesComponent
];
