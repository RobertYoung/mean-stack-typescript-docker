import { Routes } from 'nest-router';
import { UsersModule } from '@server/users/users.module';
import { ApiModule } from '@server/api/api.module';
import { API_PREFIX } from '@server/app.constants';

export const routes: Routes = [
  {
    path: API_PREFIX,
    module: ApiModule,
    children: [
      {
        path: '/user',
        module: UsersModule
      }
    ]
  }
];
