import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from '@server/users/users.service';
import { UsersController } from '@server/users/users.controller';
import { UserSchema } from '@server/users/schemas/users.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
