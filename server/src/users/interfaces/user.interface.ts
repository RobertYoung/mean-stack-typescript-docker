import { Document } from 'mongoose';

export interface User {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly age: number;
  readonly admin: boolean;
}

export class User implements User {}
export type UserDocument = User & Document;
