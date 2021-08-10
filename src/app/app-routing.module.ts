import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  {path: 'login', component:LoginComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],//recibe y lee los hijos de esas rutas
  exports: [RouterModule]
})
export class AppRoutingModule { }
