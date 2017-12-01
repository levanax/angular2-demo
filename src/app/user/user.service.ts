import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Session } from '../config/session';
import { UserData } from '../class/user-data';


@Injectable()
export class UserService {
  private headers = new Headers({
    'Content-Type': 'application/json',
    'BrokerID': 'MR',
    'Version': '1.0',
    'uuid': 'uuid',
    'Appkey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJHb1RyYWRlIiwidHlwZSI6IkludGVybmFsIiwiYXBwSWQiOiJHb01vYmlsZSIsImFsbG93U2VydmljZSI6WyJDRyIsIlBTRyJdLCJleHBpcmVzSW4iOiIyMDUwMTIzMSJ9.IJjUqqofGgjd7qNG0PCAnX8K7xBTwGoGAyxXbLcMDt8',
    'AppPwd': 'abcd1234'
  });
  private baseUrl = 'https://gotrade_uat_48.2go-app.com:13000';

  constructor(private http: Http) { }

  login(data: { loginID: string, password: string, ordChnl: string }): Promise<any> {
    console.debug('exec user login : ' + data.loginID);
    let url: string = `${this.baseUrl}/clients/${data.loginID}/session`;

    return this.http.post(url, data, { headers: this.headers })
      .toPromise()
      .then(res => {
        let result = res.json() as any;

        if (result.status === 'S') {
          let authorization = res.headers.get('authorization');

          Session.userData = new UserData({
            loginID: data.loginID,
            authorization: authorization
          });
        }
        return result;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

