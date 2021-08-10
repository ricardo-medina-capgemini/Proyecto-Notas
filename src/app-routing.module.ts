import { NotesComponent } from './app/notes/notes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './app/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { AuthGuardService } from './app/auth-guard.service';


const routes: Routes = [
  {path:'register', component: RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path:'notes', component: NotesComponent, canActivate:[AuthGuardService]}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
