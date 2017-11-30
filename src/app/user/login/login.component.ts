import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class UserLoginComponent {
  loginID: string;
  password: string;

  constructor(private userService: UserService) { }

  onLogin(): void {
    this.loginID;
    this.password;
    this.userService.login({ loginID: this.loginID, password: this.password, ordChnl: 'W' })
      .then(data => {
        console.log(data);
      });
  }
}