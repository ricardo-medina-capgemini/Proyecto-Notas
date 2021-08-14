import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from 'src/interfaces/user/nota.module';
import { NotesService } from '../service/notes.service';

@Component({
  selector: 'app-notes-table',
  templateUrl: './notes-table.component.html',
  styleUrls: ['./notes-table.component.css']
})
export class NotesTableComponent implements OnInit {
notes: Note [] = [];

constructor(private noteservice: NotesService , private router:Router){}
  ngOnInit(): void {
    this.getNotes();
  }

  async getNotes(){
    try{
      this.notes = await this.noteservice.getNotes();
      console.log(this.notes)
    }
    catch(err){
      console.log(err);
    }
  }

  Update($valor: any){
    console.log("entre a update" + $valor)
    this.router.navigate(["update-note" ,  { 'id': $valor }])
  }

}

