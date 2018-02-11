import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersPage } from './users/users';

@NgModule({
  declarations: [
    UsersPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersPage),
  ],
  exports: [
    UsersPage
  ]
})
export class UsersModule {}
