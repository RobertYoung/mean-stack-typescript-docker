import { Routes } from '@angular/router';
import { UserListComponent } from '@client/user/user-list/user-list.component';
import { UserDetailComponent } from '@client/user/user-detail/user-detail.component';
import { UserResolver } from '@client/user/user.resolver';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/user' },
  {
    path: 'user',
    children: [
      {
        path: '',
        component: UserListComponent,
        resolve: {
          user: UserResolver
        }
      },
      {
        path: ':id',
        component: UserDetailComponent,
        resolve: {
          user: UserResolver
        }
      }
    ]
  }
];
