import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from '@server/users/interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<UserDocument>) {}

  // async create(createCatDto: CreateUserDto): Promise<UserDocument> {
  //   const createdCat = new this.userModel(createCatDto);
  //   return await createdCat.save();
  // }

  async findAll(): Promise<UserDocument[]> {
    return await this.userModel.find().exec();
  }
}
