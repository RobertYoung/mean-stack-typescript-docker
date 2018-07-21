import { User } from '@shared/models/user';

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

export class ViewUser {
  static type = '[User] ViewUser';

  constructor(public readonly payload: string) {}
}
