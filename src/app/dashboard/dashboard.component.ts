import { Component, OnInit } from '@angular/core';
import { Note } from 'src/interfaces/user/nota.module';
import { User } from 'src/interfaces/user/user.module';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  notes: Note[] = [];

  nameUser="My Notes";

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

  getNotesUser(posUser: number){
    let user=this.users[posUser];
    this.nameUser=user.name+" "+user.lastname;
    this.notes=user.note;
  }

}
