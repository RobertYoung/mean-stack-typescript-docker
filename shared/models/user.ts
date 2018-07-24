export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  admin: boolean;
}

export class UserImmutable implements IUser {
  readonly _id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly age: number;
  readonly admin: boolean = false;
}

export class User implements IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  admin: boolean = false;
}
