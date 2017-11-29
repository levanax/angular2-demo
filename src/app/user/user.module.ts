import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { UserLoginComponent } from './login/login.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';


import { routes } from './user.router';

@NgModule({
  declarations: [
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule, MatInputModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MatFormFieldModule, MatInputModule
  ]
})

export class UserModule {

}
