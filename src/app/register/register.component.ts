import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup } from '@angular/forms';
import { User } from 'src/interfaces/user/user.module'; 
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
    name:"",
    lastName:"",
    phone:"",
    email:"",
    password:""
  }

  message: any="";

  constructor() { }

  ngOnInit(): void {
  }

  register(fu:NgForm){
    this.user = fu.value;
    console.log(this.user)
  }
}
