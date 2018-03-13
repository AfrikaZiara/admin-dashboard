import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class MultipleChanelService {

  constructor(private db: AngularFireDatabase) {

   }

   getAllChanels(){
    return this.db.list('/channels').valueChanges()
   }

   getUsers(){
     return this.db.list('/users').valueChanges()
   }

}
