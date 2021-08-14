import { Note } from './../../interfaces/user/nota.module';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from 'src/interfaces/user/user.module';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  @Input() route:string=""
  users: User[] = [];
  note: Note[]=[];
  nameUser:string="My notes"

  constructor(private userservice:UserService ) { }

  ngOnInit(): void {
    this.getUsers();

  }

  async getUsers(){
    try{
      this.users = await this.userservice.getUsers();
    }

    catch(err){
      console.log(err);
    }
  }

  DeleteUser(user: User){
    this.userservice.DeleteUser(user)
  }
  getUser(user: User){
    this.note=[];
    this.note=user.note;
    this.nameUser=user.name+" "+user.lastname
  }

}
