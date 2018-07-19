import { User } from '@server/users/interfaces/user.interface';

export class GetUsers {
  static type = '[User] GetUsers';
}

export class AddUser {
  static type = '[User] AddUser';

  constructor(public readonly payload: User) {}
}

export class RemoveUser {
  static type = '[User] RemoveUser';

  constructor(public readonly payload: User) {}
}
