import { User } from '@server/users/interfaces/user.interface';

export class AddUser {
  static type = '[User] Add';

  constructor(public readonly payload: User) {}
}

export class RemoveUser {
  static type = '[User] Remove';

  constructor(public readonly payload: User) {}
}
