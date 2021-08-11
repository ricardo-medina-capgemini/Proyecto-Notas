import { Injectable } from '@angular/core';

  constructor() { }
=======
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
>>>>>>> 8e4556434b0cd081690ecb955c0a841df8072789
}
