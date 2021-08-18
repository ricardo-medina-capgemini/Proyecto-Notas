import { User } from './../../interfaces/user/user.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from './../service/user.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  idUser:any =0;
  user:User[]=[];
  userForm: FormGroup;
  message: any="";



  constructor(private userservice:UserService,private route:ActivatedRoute,private router:Router) {
    this.idUser=this.route.snapshot.paramMap.get('id');
    this.getUser();
    this.userForm=new FormGroup({
      name: new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required, Validators.minLength(10)]),
      password: new FormControl('',[Validators.required, Validators.minLength(5)])
    })


   }

  ngOnInit(): void {
  }

  async getUser(){
    try{
      this.user=[];
      this.user.push(await this.userservice.getUser(this.idUser));
      console.log(this.user)
      this.userForm.setValue({
        name: this.user[0].name,
        lastname: this.user[0].lastname,
        phone: this.user[0].phone,
        password:this.user[0].password
      })
    }
    catch(err){
      console.log(err);
    }
  }

  async updateUser({value, valid}: {value: User, valid: boolean }){
      value.email=this.user[0].email
      value.id=this.user[0].id
    if(valid){
      try{
        this.message=await this.userservice.updateUser(value,this.idUser)
        console.log(typeof this.message, this.message)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Usuario Modificado',
          showConfirmButton: false,
          timer: 1000

          })
        setTimeout(()=>{
          this.router.navigate(["user"])
        },1000)
      }catch(err){
        console.log(err)
      }
      this.userForm.reset()
    }else{
      this.message="Tienes campos invalidos"
      console.log(this.userForm)
    }
  }

  get formAltaControls(): any {
    return this.userForm['controls']
 }
}
