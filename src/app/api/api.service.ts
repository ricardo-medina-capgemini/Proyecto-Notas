import { Injectable } from '@angular/core';
import { User } from 'src/interfaces/user/user.module';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  users: User[] = [];
  constructor() { }

setUser(user: User){ //Users POST
    this.users.push(user);
    //formas de guardar en el localStorage
    localStorage.users=JSON.stringify(this.users);
}

getUsers(): User[]{ //Users GET
    this.users=JSON.parse(localStorage.users);
    return this.users;
}

login(){ //login POST

}

logOut(){ //logOut POST

}
}
