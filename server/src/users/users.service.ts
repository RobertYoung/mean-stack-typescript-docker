import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from '@server/users/dto/user.dto';
import { User } from '@shared/models/user';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<UserDocument>) {}

  async findAllUsers(): Promise<UserDocument[]> {
    return await this.userModel.find().exec();
  }

  async createUser(user: User): Promise<UserDocument> {
    const userModel = new this.userModel(user);
    return await userModel.save();
  }

  public async getUser(id: string) {
    return this.userModel.findById(id).exec();
  }

  public async updateUser(id: string, user: User) {
    return this.userModel.findByIdAndUpdate(id, user, {
      new: true
    });
  }

  public async deleteUser(id: string) {
    return this.userModel.findByIdAndRemove(id);
  }
}
