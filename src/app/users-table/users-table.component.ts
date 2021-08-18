import { Note } from './../../interfaces/user/nota.module';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from 'src/interfaces/user/user.module';
import Swal from 'sweetalert2';


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
      console.log(this.users)
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

  showModal(user:User){
    Swal.fire({
      title: '¿Estas Seguro de borrar?',
      text: "El cambio es irreversible",
      icon: 'info',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.DeleteUser(user);
      }
    })
  }

}
