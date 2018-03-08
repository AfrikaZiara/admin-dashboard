
import { UserService } from './../../@core/data/users.service';
import { Component } from '@angular/core';


@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
users$;

  constructor(private userService: UserService){
    this.users$ = this.userService.fetchUsersFromFirebase()

  }
}

