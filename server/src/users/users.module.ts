import { Module } from '@nestjs/common';
import { UsersService } from '@server/users/services/users.service';
import { UsersController } from '@server/users/controllers/users.controller';

@Module({
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
