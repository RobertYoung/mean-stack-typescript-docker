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
  addUser({ getState, setState }: StateContext<UserStateModel>, { payload }: AddUser) {
    setState({
      ...getState(),
      users: [...getState().users, payload]
    });
  }

  @Action(RemoveUser)
  removeUser({ getState, setState }: StateContext<UserStateModel>, { payload }: RemoveUser) {
    setState({
      ...getState(),
      users: getState().users.filter((user, i) => user !== payload)
    });
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
