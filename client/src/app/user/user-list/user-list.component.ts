import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserState } from '@client/user/user.state';
import { GetUsers, RemoveUser } from '@client/user/user.actions';
import { UserImmutable } from '@shared/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Select(UserState.users) users$: Observable<Array<UserImmutable>>;

  constructor(private store: Store) {}

  ngOnInit() {}

  removeUser(user: UserImmutable) {
    this.store.dispatch(new RemoveUser(user._id));
  }
}
