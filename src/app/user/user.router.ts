import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserLoginComponent } from './login/login.component'

export const routes: Routes = [
  // { path: '', redirectTo: 'user/login', pathMatch: 'full' },
  { path: 'user/login', component: UserLoginComponent }
]

