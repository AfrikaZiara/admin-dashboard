import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';


@Injectable()
export class TourOperatorsService {

  constructor( private db: AngularFireDatabase) { 

  }
  registerTourOperator(operator){
    return this.db.list('/tour-operators').push(operator);
  }

}
