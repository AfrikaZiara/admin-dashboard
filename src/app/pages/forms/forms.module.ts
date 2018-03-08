import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule, routedComponents } from './forms-routing.module';
import { TourOperatorComponent } from './tour-operator/tour-operator.component';
import { FormTourPackageComponent } from './form-tour-package/form-tour-package.component';

@NgModule({
  imports: [
    ThemeModule,
    FormsRoutingModule,
  ],
  declarations: [
    ...routedComponents,
    TourOperatorComponent,
    FormTourPackageComponent,
  ],
})
export class FormsModule { }
