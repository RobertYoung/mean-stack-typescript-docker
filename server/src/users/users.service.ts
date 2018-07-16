import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { UserDocument } from '@server/users';
import { InjectModel } from '../../node_modules/@nestjs/mongoose';

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
