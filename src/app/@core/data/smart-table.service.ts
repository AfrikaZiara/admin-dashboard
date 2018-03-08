import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableService {

  constructor( private db: AngularFireDatabase){

  }

 
  getDataFromDb(){
    return this.db.list('/users').valueChanges()
  }


}
