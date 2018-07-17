import { Component } from '@angular/core';
import { User } from '@server/users/interfaces/user.interface';
import { Select, Store } from '@ngxs/store';
import { AppState } from '@client/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Select(AppState.users) users$: Observable<Array<User>>;

  constructor(private store: Store) {}
}
