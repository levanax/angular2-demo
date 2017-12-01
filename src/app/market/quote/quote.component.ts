import { Component, OnInit } from '@angular/core';
import { MarketService } from '../market.service';
import { Session } from '../../config/session';


@Component({
  selector: 'market-quote',
  templateUrl: './quote.component.html',
  styles:[``] 
})

export class MarketQuoteComponent implements OnInit {
  constructor(private marketService: MarketService) {}
  ngOnInit(): void {
    this.marketService.initConnect({
      authorization: Session.userData.authorization
    });

  }
}

