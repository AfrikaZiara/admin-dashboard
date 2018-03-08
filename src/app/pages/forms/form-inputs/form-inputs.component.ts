import { TourOperatorsService } from './../../../@core/data/tour-operators.service';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent {

  starRate = 2;
  heartRate = 4;

  constructor( private tourOperatorsService: TourOperatorsService){
    
  }

  registerTourOp(operator){
    this.tourOperatorsService.registerTourOperator(operator)
  }
  
}
