import { NotesComponent } from './app/notes/notes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './app/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { AuthGuardService } from './app/auth-guard.service';
import { UserComponent } from './app/user/user.component';
import { NewNoteComponent } from './app/new-note/new-note.component';


const routes: Routes = [
  {path:'register', component: RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path:'notes', component: NotesComponent,canActivate:[AuthGuardService]},
  {path:'new-note' , component:NewNoteComponent, canActivate:[AuthGuardService]}

,
  {path: 'user', component: UserComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
