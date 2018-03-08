import { TourOperatorsService } from './../../../@core/data/tour-operators.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tour-operator',
  templateUrl: './tour-operator.component.html',
  styleUrls: ['./tour-operator.component.scss']
})
export class TourOperatorComponent {

  constructor( private tourOperatorsService: TourOperatorsService , private router: Router) { 

  }

  registerTourOp(TourOperator){
    this.tourOperatorsService.registerTourOperator(TourOperator)
  }



}
