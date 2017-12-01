import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import io from 'socket.io-client';
import { Setting } from '../config/setting';

@Injectable()
export class MarketService {

  private feedSocket: any ;
  private feedAddress: string = 'https://gotrade_uat_48.2go-app.com:14000';

  constructor(private http: Http) { }

  private createConnect(data: {authorization: string}): void {
    this.feedSocket = io.connect(this.feedAddress, {
			reconnectionAttempts: 0,
			timeout: 2000,
			reconnectionDelay: 100,
			reconnectionDelayMax: 200,
			autoConnect: false,
			multiplex: false,
			query: [
				'authorization=' + data.authorization,
				'uuid=' + 'uuid',
				'brokerID=' + 'MR',
				'Appkey=' + Setting.Appkey,
				'AppPwd=' + Setting.AppPwd
			].join('&')
		});
		this.feedSocket.connect();
		this.feedSocket.on('connect', ()=> {
			console.debug('[feedSocket]: connected.');
		});
  }

  initConnect(data: {authorization: string}): void {
    this.createConnect(data);
  }

  subscribeStock(data: {sctyID: string, marketCode: string}): void {

  }
  subscribeIndex(): void {

  }
}