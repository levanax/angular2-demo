import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { UserLoginComponent } from './login/login.component';

import { routes } from './user.router';

@NgModule({
  declarations: [
    UserLoginComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class UserModule {

}
