import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'table-tour-operators',
  templateUrl: './table-tour-operators.component.html',
  styleUrls: ['./table-tour-operators.component.scss']
})
export class TableTourOperatorsComponent {

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
      name: {
        title: 'Name',
        type: 'string',
      },
      category: {
        title: 'Category',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      phone: {
        title:'Phone',
        type: 'string',
      },
      address: {
        title:'Address',
        type: 'string',
      },
      websiteUrl: {
        title:'Website',
        type: 'string',
      },
    },
  };

  tourOperators$;
  constructor( private db:AngularFireDatabase) {
    this.tourOperators$ = this.db.list('/tour-operators').valueChanges()
   }

}
