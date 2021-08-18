import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup } from '@angular/forms';
import { User } from 'src/interfaces/user/user.module';
import { UserService } from '../service/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;
  message: any="";

  constructor(private userService: UserService,private router:Router) {
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
    value.note = [];
    value.id = this.userService.lastUser();
    console.log(value, valid)
    if(valid){
      try{
        this.message=await this.userService.registertUser(value);
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Usuario creado',
        showConfirmButton: false,
        timer: 1000
        })
        this.userForm.reset()
        setTimeout(()=>{
          this.router.navigate(["login"])
        },1000)

        console.log(typeof this.message, this.message)
      }catch(err){
        console.log(err)
      }

    }else{
      console.log(this.userForm)
    }
  }

  get formAltaControls(): any {
    return this.userForm['controls']
 }
}
