import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule, routedComponents } from './forms-routing.module';
import { TourOperatorComponent } from './tour-operator/tour-operator.component';
import { TourPackageComponent } from './tour-package/tour-package.component';

@NgModule({
  imports: [
    ThemeModule,
    FormsRoutingModule,
  ],
  declarations: [
    ...routedComponents,
    TourOperatorComponent,
    TourPackageComponent,
  ],
})
export class FormsModule { }
