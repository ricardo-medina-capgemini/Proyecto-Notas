import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './app/register/register.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'register', component: RegisterComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
