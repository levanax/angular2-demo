import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MarketService } from './market.service';
import { routes } from './market.router';

import { MarketQuoteComponent } from './quote/quote.component'

@NgModule({
  declarations: [
    MarketQuoteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    MarketService
  ]
})

export class MarketModule {

}