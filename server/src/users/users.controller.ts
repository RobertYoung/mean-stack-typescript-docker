import { Controller, Get, Body, Post, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from '@server/users/users.service';
import { UserDocument, User } from '@server/users/interfaces/user.interface';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAll(): Promise<UserDocument[]> {
    return this.usersService.findAllUsers();
  }

  @Get('/:id')
  public async getUser(@Param('id') id) {
    return this.usersService.getUser(id);
  }

  @Post()
  async createUser(@Body() user: User) {
    return this.usersService.createUser(user);
  }

  @Put('/:id')
  public async updateUser(@Param('id') id, @Body() user: User) {
    return this.usersService.updateUser(id, user);
  }

  @Delete('/:id')
  public async deleteUser(@Param('id') id) {
    return this.usersService.deleteUser(id);
  }
}
