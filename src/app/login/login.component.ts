import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    const { email, password } = this;

    this.auth.signinUser(email, password);
  }
}
