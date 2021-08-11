import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { User } from 'src/interfaces/user/user.module';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[]=[];
  constructor(private apiServices: ApiService) { }

  registertUser(user: User){
    return new Promise((resolve,reject)=>{
        if(user.email != null){
            this.apiServices.setUser(user)
            resolve("Exito en la Operación, usuario Insertado correctamente")
        }else{
            reject("Valor del email no valido")
        }
    })

}


  getUsers(){//Retorna la promesa o la regresa
      return new Promise<User[]>((resolve, reject)=>{
          this.users=this.apiServices.getUsers();
          resolve(this.users);
      })
  }

  logIn(email:string, password:string){
    return new Promise((resolve,reject)=>{
      let isUser= this.apiServices.login(email,password);
      if(isUser){
        resolve(true);
      }else{
        reject(false);
      }
    })
  }

  isLogin(){
    return this.apiServices.getIsLogin();
  }
}
