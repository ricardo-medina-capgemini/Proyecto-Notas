import { User } from './../../interfaces/user/user.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from './../service/user.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

    if(valid){
      try{
        this.message=await this.userservice.updateUser(this.user[0],this.idUser)
        console.log(typeof this.message, this.message)
        this.router.navigate(["user"])
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
