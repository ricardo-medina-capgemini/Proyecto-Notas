import { Injectable } from '@angular/core';
import { User } from 'src/interfaces/user/user.module';
import { Note } from 'src/interfaces/user/nota.module';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  users: User[] = [];

  constructor() {
    this.users=JSON.parse(localStorage.users || "[]");
   }

setUser(user: User){ //Users POST
    this.users.push(user);
    //formas de guardar en el localStorage
    localStorage.users=JSON.stringify(this.users);
}

getUsers(): User[]{
    this.users=JSON.parse(localStorage.users);
    return this.users;
}
//Notes--------------
setNote(note: Note){
  let idUser=this.getId();
  this.users[idUser].note.push(note);
  localStorage.users=JSON.stringify(this.users);
}

updateNote(note: Note){
  let id = note.id;
 // console.log("el id correcto es " + id)
  let idUser=this.getId();
  //console.log("el usuario correcto es" + idUser)
// console.log("el cambio esta en" + JSON.stringify(this.users[idUser].note[id-1]))
  this.users[idUser].note[id-1]=note;

 // console.log("elJSON de usuarios que meto al storage es " + JSON.stringify(this.users));
  
  localStorage.users=JSON.stringify(this.users);
}

getNotes(): Note[]{
  this.users=JSON.parse(localStorage.users);
  return this.users[this.getId()].note;
}
//--------------
login(email: string,password: string):boolean{ //login POST
  this.users=JSON.parse(localStorage.users || "[]");
  let emails =this.users.map(function(e){return e.email})
  let passwords =this.users.map(function(e){return e.password})
  let pos=emails.indexOf(email);
  if(pos!=-1){
    if(passwords[pos]===password){
      localStorage.isLogIn=1;
      localStorage.posUser=pos;
      console.log(localStorage.posUser)
      return true
    }else{
      localStorage.isLogIn=0;
      localStorage.posUser=-1;
      return false;
    }
  }else{
    localStorage.isLogIn=0;
    localStorage.posUser=-1;
    return false;
  }
}

getIsLogin():number{
  return parseInt(localStorage.isLogIn) || 0;
}

getId(): number{
  return parseInt(localStorage.posUser);
}

logOut(){ //logOut POST

}
}
