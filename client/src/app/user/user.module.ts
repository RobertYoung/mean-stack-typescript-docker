import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserListComponent } from '@client/user/user-list/user-list.component';
import { UserDetailComponent } from '@client/user/user-detail/user-detail.component';
import { UserService } from '@client/user/user.service';
import { UserResolver } from '@client/user/user.resolver';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [RouterModule, CommonModule, NgbModule, FormsModule, ReactiveFormsModule],
  providers: [UserService, UserResolver],
  declarations: [UserListComponent, UserDetailComponent, UserEditComponent],
  exports: [UserListComponent, UserDetailComponent]
})
export class UserModule {}
