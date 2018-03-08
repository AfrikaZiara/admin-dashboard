import { UserService } from './../../../@core/data/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss']
})
export class TableUsersComponent {


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
      email: {
        title: 'E-mail',
        type: 'string',
      },
      isAdmin: {
        title: 'Admin',
        type: 'boolean',
      },
      isTourOperator: {
        title: 'Tour Operator',
        type: 'boolean',
      },
    },
  };


  users$;
  constructor( private userService: UserService) { 
    this.users$ = this.userService.fetchUsersFromFirebase()
  }

 

}
