import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class UserLoginComponent {
  loginID: string;
  password: string;

  onLogin(): void {
    this.loginID;
    this.password;
    console.log(this.loginID, this.password);
  }
}