import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddUser, RemoveUser, GetUsers, ViewUser } from '@client/user/user.actions';
import { UserService } from '@client/user/user.service';
import { tap, catchError } from 'rxjs/operators';
import { User } from '@shared/models/user';

export class UserStateModel {
  users: User[];
  user: User;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    users: [],
    user: null
  }
})
export class UserState {
  constructor(private userService: UserService) {}

  @Selector()
  static users(state: UserStateModel) {
    return state.users;
  }

  @Selector()
  static user(state: UserStateModel) {
    return state.user;
  }

  @Action(GetUsers)
  getUsers(ctx: StateContext<UserStateModel>, action: GetUsers) {
    return this.userService.getUsers().pipe(
      tap(users => {
        const state = ctx.getState();

        ctx.setState({
          ...state,
          users: users
        });
      }),
      catchError((error, caught) => {
        window.alert('could not get users');
        return caught;
      })
    );
  }

  @Action(AddUser)
  addUser({ getState, setState }: StateContext<UserStateModel>, { payload }: AddUser) {
    setState({
      ...getState(),
      users: [...getState().users, payload]
    });
  }

  @Action(RemoveUser)
  removeUser(ctx: StateContext<UserStateModel>, { payload }: RemoveUser) {
    return this.userService.deleteUser(payload._id).pipe(
      tap(user => {
        const state = ctx.getState();

        ctx.setState({
          ...state,
          users: ctx.getState().users.filter((x, i) => x._id !== payload._id)
        });
      })
    );
  }

  @Action(ViewUser)
  viewUser({ getState, setState }: StateContext<UserStateModel>, { payload }: ViewUser) {
    const user: User = getState().users.find((x, i) => x._id === payload);

    setState({
      ...getState(),
      user: user
    });
  }
}
