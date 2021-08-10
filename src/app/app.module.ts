import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { NotesComponent } from './notes/notes.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from 'src/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NotesComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
