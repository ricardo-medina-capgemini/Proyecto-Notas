import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from 'src/interfaces/user/user.module';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
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
