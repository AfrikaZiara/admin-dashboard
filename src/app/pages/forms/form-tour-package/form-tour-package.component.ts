import { AdminTourPackagesService } from './../../../@core/data/admin-tour-packages.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-tour-package',
  templateUrl: './form-tour-package.component.html',
  styleUrls: ['./form-tour-package.component.scss']
})
export class FormTourPackageComponent {

  constructor( private adminTourPackagesService: AdminTourPackagesService) { 

  }

  addTourPackage(tourPackage){
    this.adminTourPackagesService.addNewTourPackage(tourPackage)
  }




}
