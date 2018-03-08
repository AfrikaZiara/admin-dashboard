import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminTourPackagesService {

  constructor( private db: AngularFireDatabase, private router: Router ) {

   }
   addNewTourPackage(tour){
    this.db.list('/tours').push(tour)
    this.router.navigate(['/pages/tables/table-tour-packages'])
   }

   fetchAllTourPackages(){
     return this.db.list('/tours').valueChanges()
   }


}
