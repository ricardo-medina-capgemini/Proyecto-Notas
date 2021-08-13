import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { NotesComponent } from './notes/notes.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from 'src/app-routing.module';
import { AuthGuardService } from './auth-guard.service';
import { NewNoteComponent } from './new-note/new-note.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NotesTableComponent } from './notes-table/notes-table.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersTableComponent } from './users-table/users-table.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NotesComponent,
    LoginComponent,
    NewNoteComponent,
    NotesTableComponent,
    UserComponent,
    DashboardComponent,
    UsersTableComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
