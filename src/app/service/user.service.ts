import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { User } from 'src/interfaces/user/user.module';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];
  constructor(private apiServices: ApiService) { }

  registertUser(user: User) {
    return new Promise((resolve, reject) => {
      if (user.email != null) {
        this.apiServices.setUser(user)
        resolve("Exito en la Operación, usuario Insertado correctamente")
      } else {
        reject("Valor del email no valido")
      }
    })

  }


  getUsers() {//Retorna la promesa o la regresa
    return new Promise<User[]>((resolve, reject) => {
      this.users = this.apiServices.getUsers();
      resolve(this.users);
    })
  }
  lastUser(){
    this.getUsers();
    console.log(this.getUsers());
    if (this.users.length>0){
      let lastItem = this.users[this.users.length-1];
      console.log(lastItem)
      return lastItem.id+1
    } else{
      return 1;
    }
  }
  DeleteUser(user: User){
    this.apiServices.DeleteUser(user)
  }

  logIn(email: string, password: string) {
    return new Promise((resolve, reject) => {
      let isUser = this.apiServices.login(email, password);
      if (isUser) {
        resolve(true);
      } else {
        reject(false);
      }
    })
  }

  isLogin() {
    return this.apiServices.getIsLogin();
  }

}
