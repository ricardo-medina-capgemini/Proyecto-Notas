import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Note } from 'src/interfaces/user/nota.module';
import { User } from 'src/interfaces/user/user.module';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit {

  route=""
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.route=this.router.url;
  }
}
