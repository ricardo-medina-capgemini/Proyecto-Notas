import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  canAccess:boolean=false;
  constructor(private router:Router) { }


  canActivate(router: ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean|UrlTree{
    if(!this.canAccess){
      alert("No tienes permiso para estar en la seccion por favor de iniciar sesion");
      this.router.navigate(["login"],{queryParams: {retUrl: router.url}})
      return false;
    }
    return true;
  }
}
