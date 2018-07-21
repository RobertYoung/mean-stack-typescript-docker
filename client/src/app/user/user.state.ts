import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddUser, RemoveUser, GetUsers } from '@client/user/user.actions';
import { UserService } from '@client/user/user.service';
import { tap, catchError } from 'rxjs/operators';
import { User } from '@shared/models/user';

export class UserStateModel {
  users: User[];
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    users: []
  }
})
export class UserState {
  constructor(private userService: UserService) {}

  @Selector()
  static users(state: UserStateModel) {
    return state.users;
  }

  @Action(GetUsers)
  getUsers(ctx: StateContext<UserStateModel>, action: GetUsers) {
    // ngxs will subscribe to the post observable for you if you return it from the action
    return this.userService.getUsers().pipe(
      // we use a tap here, since mutating the state is a side effect
      tap(users => {
        const state = ctx.getState();

        ctx.setState({
          ...state,
          users: users
        });
      })
      // if the post goes sideways we need to handle it
      // catchError(error => window.alert('could not add todo'))
    );
  }

  @Action(AddUser)
  addUser({ getState, setState }: StateContext<User[]>, { payload }: AddUser) {
    setState([...getState(), payload]);
  }

  @Action(RemoveUser)
  removeUser({ getState, setState }: StateContext<User[]>, { payload }: RemoveUser) {
    setState(getState().filter((user, i) => user !== payload));
  }
}
