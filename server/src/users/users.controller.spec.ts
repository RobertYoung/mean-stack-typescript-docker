import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '@server/users/users.controller';

describe('Users Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [UsersController]
    }).compile();
  });

  it('should be defined', () => {
    const controller: UsersController = module.get<UsersController>(UsersController);
    expect(controller).toBeDefined();
  });
});
