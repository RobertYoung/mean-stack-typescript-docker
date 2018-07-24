import { Component, OnInit, OnDestroy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { UserState } from '@client/user/user.state';
import { Observable } from 'rxjs';
import { UserImmutable } from '@shared/models/user';
import { ActivatedRoute } from '@angular/router';
import { ViewUser } from '@client/user/user.actions';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  @Select(UserState.user) user$: Observable<UserImmutable>;

  private sub: any;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.store.dispatch(new ViewUser(params['id']));
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
