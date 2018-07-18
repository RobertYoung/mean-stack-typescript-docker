import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from '@client/user/user-list/user-list.component';
import { UserDetailComponent } from '@client/user/user-detail/user-detail.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UserListComponent, UserDetailComponent],
  exports: [UserListComponent, UserDetailComponent]
})
export class UserModule {}
