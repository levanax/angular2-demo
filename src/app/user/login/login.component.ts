import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router} from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class UserLoginComponent {
  loginID: string;
  password: string;

  constructor(private router: Router,private userService: UserService) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    console.debug('login component - destroy.')
  }

  onLogin(): void {
    this.loginID;
    this.password;
    this.userService.login({ loginID: this.loginID, password: this.password, ordChnl: 'W' })
      .then(data => {
        if(data.status === 'S'){
          this.router.navigate(['market/quote',{t:'t'}]);
        }else{
          console.debug('Login ID or Password incorrect.',data);
        }
      });
  }
}