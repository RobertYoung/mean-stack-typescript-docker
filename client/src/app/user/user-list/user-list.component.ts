import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from '@server/users/interfaces/user.interface';
import { UserState } from '@client/user/user.state';
import { GetUsers } from '@client/user/user.actions';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Select(UserState.users) users$: Observable<Array<User>>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new GetUsers());
  }
}
