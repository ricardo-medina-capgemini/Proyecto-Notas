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
  
  userForm: FormGroup;
  message: any="";

  constructor(private userService: UserService) {
    this.userForm=new FormGroup({
      name: new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required, Validators.minLength(10)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(5)])
    })
   }

  ngOnInit(): void {
  }

  /*register(fu:NgForm){
    this.user = fu.value;
    console.log(this.user)
  }*/

  async register({value, valid}: {value: User, valid: boolean }){
    console.log(value, valid)
    if(valid){
      try{
        this.message=await this.userService.registertUser(value)
        console.log(typeof this.message, this.message)
      }catch(err){
        console.log(err)
      }
      this.userForm.reset()
    }else{
      this.message="Tienes campos invalidos"
      console.log(this.userForm)
    }
  }
}
