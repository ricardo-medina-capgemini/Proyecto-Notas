import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Note } from 'src/interfaces/user/nota.module';
import { NotesService } from '../service/notes.service';
@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent implements OnInit {
  noteForm: FormGroup;
  message: any="";
  id:number=0;
  constructor(private notesService: NotesService ,  private route: ActivatedRoute) { 
    this.noteForm =new FormGroup({

      titulo: new FormControl('',[Validators.required]),
      descripcion: new FormControl('',[Validators.required]),
      tipo: new FormControl('',[Validators.required]),
      fecha_a: new FormControl('',[Validators.required]),
      fecha_t: new FormControl('',[Validators.required]),

      
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
       this.id = params['id']
      
  });
  console.log("se recupera el valor " + this.id)
  }

  async updateNote({value, valid}: {value: Note, valid: boolean }){
    value.id = this.id // = id del boton click en las notas 
    console.log(value, valid)
    if(valid){
      try{
        this.message=await this.notesService.updateNote(value)
        console.log(typeof this.message, this.message)
      }catch(err){
        console.log(err)
      }
      this.noteForm.reset()
    }else{
      this.message="Tienes campos invalidos"
      console.log(this.noteForm)
    }
  }

  Update(){
    
  }

}
