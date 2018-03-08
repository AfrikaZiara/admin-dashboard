import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { TableTourOperatorsComponent } from './table-tour-operators/table-tour-operators.component';
import { TableTouristsComponent } from './table-tourists/table-tourists.component';
import { TableTourBookingsComponent } from './table-tour-bookings/table-tour-bookings.component';
import { TableTourPackagesComponent } from './table-tour-packages/table-tour-packages.component';

@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    TableTourOperatorsComponent,
    TableTouristsComponent,
    TableTourBookingsComponent,
    TableTourPackagesComponent
    
  ],
  providers: [
    SmartTableService,
  ],
})
export class TablesModule { }
