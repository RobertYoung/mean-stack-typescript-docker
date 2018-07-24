import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { User } from '@shared/models/user';
import { Store, Select } from '@ngxs/store';
import { AddUser, EditUser } from '@client/user/user.actions';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { UserState } from '@client/user/user.state';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, OnDestroy {
  user: User;

  @Select(UserState.user) user$: Observable<User>;
  @ViewChild('userForm') form: FormGroup;

  private routeSub: Subscription;
  private userSub: Subscription;

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = new User();

    this.routeSub = this.route.params.subscribe(params => {
      this.store.dispatch(new EditUser(params['id']));
    });

    this.userSub = this.user$.subscribe(user => (this.user = user));
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.userSub.unsubscribe();
  }

  onSubmit() {
    if (this.form.valid) {
      this.store.dispatch(new AddUser(this.user)).subscribe(() => this.goToUsersList());
    } else {
      console.log(`Form invalid!`);
    }
  }

  goToUsersList() {
    this.router.navigate(['user']);
  }
}
