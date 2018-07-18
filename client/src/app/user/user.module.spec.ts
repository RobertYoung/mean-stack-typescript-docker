import { UserModule } from '@client/user/user.module';

describe('UserModule', () => {
  let userModule: UserModule;

  beforeEach(() => {
    userModule = new UserModule();
  });

  it('should create an instance', () => {
    expect(userModule).toBeTruthy();
  });
});
