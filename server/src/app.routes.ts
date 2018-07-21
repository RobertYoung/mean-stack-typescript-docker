import { Routes } from 'nest-router';
import { UsersModule } from '@server/users/users.module';
import { ApiModule } from '@server/api/api.module';

export const routes: Routes = [
  {
    path: '/api',
    module: ApiModule,
    children: [
      {
        path: '/user',
        module: UsersModule
      }
    ]
  }
];
