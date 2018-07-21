import { Document } from 'mongoose';
import { User } from '@shared/models/user';

export type UserDocument = User & Document;
