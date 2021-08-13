import { Router } from '@angular/router';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from './login.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  message="";
  constructor(private userService:UserService, private router:Router) {
    this.userForm=new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(5)])
    })
   }

  ngOnInit(): void {

  }

  validarCampos({value, valid}: {value: any, valid: boolean }){
    //console.log(value,valid)
    if(valid){
      this.loginUser(value.email,value.password)
      this.userForm.reset()
    }else{
      this.message="Tienes campos invalidos"
      console.log(this.userForm)
    }
  }


  async loginUser(email: string,password:string){
    try {
      let valor= await this.userService.logIn(email,password)
      //console.log(valor)
      this.router.navigate(["user"])

    } catch (error) {
      console.log(error)
    }
  }

}
