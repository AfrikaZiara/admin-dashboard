import { AdminTourPackagesService } from './../../../@core/data/admin-tour-packages.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'table-tour-packages',
  templateUrl: './table-tour-packages.component.html',
  styleUrls: ['./table-tour-packages.component.scss']
})
export class TableTourPackagesComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      title: {
        title: 'Title',
        type: 'string',
      },
      price: {
        title: 'Price',
        type: 'string',
      },
      category: {
        title: 'Category',
        type: 'string',
      },
      destination: {
        title: 'Destination',
        type: 'string',
      },
    },
  };
  tours$;
  constructor( private adminTourPackagesService: AdminTourPackagesService) { 
    this.tours$ = this.adminTourPackagesService.fetchAllTourPackages()
  }



}
