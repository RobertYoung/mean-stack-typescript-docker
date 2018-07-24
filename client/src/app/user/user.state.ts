import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddUser, RemoveUser, GetUsers, ViewUser, EditUser } from '@client/user/user.actions';
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
  getUsers({ patchState }: StateContext<UserStateModel>, action: GetUsers) {
    return this.userService.getUsers().pipe(
      tap(users => {
        patchState({ users });
      }),
      catchError((error, caught) => {
        window.alert('could not get users');
        return caught;
      })
    );
  }

  @Action(AddUser)
  addUser({ getState, patchState }: StateContext<UserStateModel>, { payload }: AddUser) {
    return this.userService.addUser(payload).pipe(
      tap(user => {
        patchState({
          users: [...getState().users, user]
        });
      })
    );
  }

  @Action(RemoveUser)
  removeUser({ getState, patchState }: StateContext<UserStateModel>, { payload }: RemoveUser) {
    return this.userService.deleteUser(payload).pipe(
      tap(user => {
        patchState({
          users: getState().users.filter((x, i) => x._id !== payload)
        });
      })
    );
  }

  @Action(ViewUser)
  viewUser({ getState, setState, patchState }: StateContext<UserStateModel>, { payload }: ViewUser) {
    const findUser: User = getState().users.find((x, i) => x._id === payload);

    if (!findUser) {
      return this.userService.getUser(payload).pipe(
        tap(user => {
          patchState({
            user
          });
        })
      );
    }

    setState({
      ...getState(),
      user: findUser
    });
  }

  @Action(EditUser)
  editUser({ getState, setState, patchState }: StateContext<UserStateModel>, { payload }: ViewUser) {
    const findUser: User = getState().users.find((x, i) => x._id === payload);

    if (!findUser) {
      return this.userService.getUser(payload).pipe(
        tap(user => {
          patchState({
            user
          });
        })
      );
    }

    setState({
      ...getState(),
      user: findUser
    });
  }
}
