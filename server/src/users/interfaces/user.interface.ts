import { Document } from 'mongoose';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  admin: boolean;
}

export class User implements User {}
export type UserDocument = User & Document;
