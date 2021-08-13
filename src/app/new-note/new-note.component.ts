import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Note } from 'src/interfaces/user/nota.module';
import { NotesService } from '../service/notes.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  
  count =1;
  noteForm: FormGroup;
  message: any="";
 
  constructor(private notesService: NotesService) {
    this.noteForm =new FormGroup({

      titulo: new FormControl('',[Validators.required]),
      descripcion: new FormControl('',[Validators.required]),
      tipo: new FormControl('',[Validators.required]),
      fecha_a: new FormControl('',[Validators.required]),
      fecha_t: new FormControl('',[Validators.required]),

      
    })
  }
  ngOnInit(): void {
  }

  async createNote({value, valid}: {value: Note, valid: boolean }){
    value.id = this.notesService.lastNote();
    console.log(value, valid)
    if(valid){
      try{
        this.message=await this.notesService.createNote(value)
        console.log(typeof this.message, this.message)
      }catch(err){
        console.log(err)
      }
      this.noteForm.reset()
      this.count++;
    }else{
      this.message="Tienes campos invalidos"
      console.log(this.noteForm)
    }
  }
 
}
