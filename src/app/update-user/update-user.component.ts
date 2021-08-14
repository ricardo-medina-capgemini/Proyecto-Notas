import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from './../service/user.service';
import { User } from 'src/interfaces/user/user.module';
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
      console.log(this.user)

    }

    catch(err){
      console.log(err);
    }
  }

  async register({value, valid}: {value: User, valid: boolean }){

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
}
