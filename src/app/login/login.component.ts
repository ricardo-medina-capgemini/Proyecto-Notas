import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Login } from './login.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logins: Login[]=[]

  login: Login={
    email:"",
    password:""
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(fu: NgForm): void {

    //alert("Registrado");
    //console.log(fu.value);
    const {email,password}=fu.value;

    this.login={
      email: email,
      password: password
    }
    this.logins.push(this.login);
    console.log(this.logins);
  }
  
}
