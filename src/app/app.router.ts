import { NgModule } from '@angular/core';
import { Routes } from '../../node_modules/._@angular_router@5.0.3@@angular/router/src/config';

export const routes: Routes = [
  { path: '', redirectTo: 'user/login', pathMatch: 'full'},
  { loadChildren: 'app/user/user.module#UserModule', path: 'user'},
  { loadChildren: 'app/market/market.module#MarketModule', path: 'market'}
];

