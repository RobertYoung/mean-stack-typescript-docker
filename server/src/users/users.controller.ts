import { Controller, Get } from '@nestjs/common';
import { UsersService } from '@server/users/users.service';
import { UserDocument } from '@server/users/interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<UserDocument[]> {
    return this.usersService.findAll();
  }
}
