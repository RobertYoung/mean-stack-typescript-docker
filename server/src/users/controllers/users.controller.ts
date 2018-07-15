import { Controller, Get } from '@nestjs/common';
import { User } from '@server/users/models';

@Controller('users')
export class UsersController {
  @Get()
  root(): Array<User> {
    return [<User>{ firstName: 'Rob' }];
  }
}
