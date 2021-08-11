import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from './service/user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router:Router,private userService:UserService) { }


  canActivate(router: ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean|UrlTree{
    if(!this.userService.isLogin()){
      alert("No tienes permiso para estar en la seccion por favor de iniciar sesion");
      this.router.navigate(["login"],{queryParams: {retUrl: router.url}})
      return false;
    }
    return true;
  }
}
