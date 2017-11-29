import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { UserLoginComponent } from './login/login.component';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

import { UserService } from './user.service';


import { routes } from './user.router';

@NgModule({
  declarations: [
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),

    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule
  ],
  exports: [
    MatFormFieldModule, MatInputModule
  ],
  providers: [
    UserService
  ]
})

export class UserModule {

}
