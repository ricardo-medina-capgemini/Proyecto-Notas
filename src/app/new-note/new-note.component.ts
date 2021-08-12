import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Note } from 'src/interfaces/user/nota.module';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  
  noteForm: FormGroup;
  note:Note = {
    id:"",
    titulo:"",
    descripcion:"",
    tipo:"",
    fecha_a:new Date(),
    fecha_t:new Date(),
    estado:""
  }

  constructor(private userService: UserService) {
    this.noteForm =new FormGroup({
      titulo: new FormControl('',[Validators.required]),
      descripcion: new FormControl('',[Validators.required]),
      tipo: new FormControl('',[Validators.required]),
      fecha_a: new FormControl('',[Validators.required]),
      
    })
  }
  ngOnInit(): void {
  }

}
