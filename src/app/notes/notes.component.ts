import { Component, OnInit } from '@angular/core';
import { Note } from 'src/interfaces/user/nota.module';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
