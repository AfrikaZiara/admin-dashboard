import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';


@Injectable()
export class TourOperatorsService {

  constructor( private db: AngularFireDatabase, private router: Router) { 

  }
  registerTourOperator(operator){
    this.db.list('/tour-operators').push(operator)
    this.router.navigate(['/pages/tables/table-tour-operators']);
  }

}
