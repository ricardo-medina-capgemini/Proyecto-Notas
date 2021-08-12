import { Injectable } from '@angular/core';
import { User } from 'src/interfaces/user/user.module';
import { Note } from 'src/interfaces/user/nota.module';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  users: User[] = [];
  //_____Notes_______
  notes: Note[] = [];
  //________________
  constructor() {
    this.users=JSON.parse(localStorage.users || "[]");
    //Notes____
    this.notes=JSON.parse(localStorage.notes || "[]");
    //_________
   }

setUser(user: User){ //Users POST
    this.users.push(user);
    //formas de guardar en el localStorage
    localStorage.users=JSON.stringify(this.users);
}

getUsers(): User[]{ //Users GET
    this.users=JSON.parse(localStorage.users);
    return this.users;
}
//Notes--------------
setNote(note: Note){ //Users POST
  this.notes.push(note);
  //formas de guardar en el localStorage
  localStorage.notes=JSON.stringify(this.notes);
}

getNotes(): Note[]{ //Users GET
  this.notes=JSON.parse(localStorage.notes);
  return this.notes;
}
//--------------
login(email: string,password: string):boolean{ //login POST
  this.users=JSON.parse(localStorage.users || "[]");
  let emails =this.users.map(function(e){return e.email})
  let passwords =this.users.map(function(e){return e.password})
  let pos=email.indexOf(email);
  if(pos!=-1){
    if(passwords[pos]===password){
      localStorage.isLogIn=1;
      return true
    }else{
      localStorage.isLogIn=0;
      return false;
    }
  }else{
    localStorage.isLogIn=0;
    return false;
  }
}

getIsLogin():number{
  return parseInt(localStorage.isLogin) || 0;
}

logOut(){ //logOut POST

}
}
