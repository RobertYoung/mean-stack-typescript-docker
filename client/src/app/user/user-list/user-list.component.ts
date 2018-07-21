import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserState } from '@client/user/user.state';
import { GetUsers } from '@client/user/user.actions';
import { User } from '@shared/models/user';

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
