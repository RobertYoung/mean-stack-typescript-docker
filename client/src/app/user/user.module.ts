import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserListComponent } from '@client/user/user-list/user-list.component';
import { UserDetailComponent } from '@client/user/user-detail/user-detail.component';
import { UserService } from '@client/user/user.service';
import { UserResolver } from '@client/user/user.resolver';

@NgModule({
  imports: [RouterModule, CommonModule],
  providers: [UserService, UserResolver],
  declarations: [UserListComponent, UserDetailComponent],
  exports: [UserListComponent, UserDetailComponent]
})
export class UserModule {}
