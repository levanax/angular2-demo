import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarketQuoteComponent } from './quote/quote.component';

export const routes: Routes = [
  { path: 'quote', component: MarketQuoteComponent }
]