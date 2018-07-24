import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserImmutable } from '@shared/models/user';
import { Store } from '@ngxs/store';
import { GetUsers } from '@client/user/user.actions';

@Injectable()
export class UserResolver implements Resolve<Observable<UserImmutable[]>> {
  constructor(private store: Store) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserImmutable[]> {
    return this.store.dispatch(new GetUsers());
  }
}
