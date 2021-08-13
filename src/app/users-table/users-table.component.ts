import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from 'src/interfaces/user/user.module';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  users: User[] = [];

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

  

}
