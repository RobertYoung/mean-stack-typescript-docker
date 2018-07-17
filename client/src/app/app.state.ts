import { State, Action, StateContext, Selector } from '@ngxs/store';
import { User } from '@server/users/interfaces/user.interface';
import { AddUser, RemoveUser } from '@client/app.actions';

export class UserStateModel {
  users: User[];
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    users: [
      {
        firstName: 'Rob',
        lastName: 'Young',
        admin: true,
        age: 26,
        email: 'me@me.com'
      }
    ]
  }
})
export class AppState {
  @Selector()
  static users(state: UserStateModel) {
    return state.users;
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
