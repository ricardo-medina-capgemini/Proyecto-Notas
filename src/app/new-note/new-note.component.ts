import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Nota } from 'src/interfaces/user/nota.module';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  nota:Nota = {
    id:"",
    titulo:"",
    descripcion:"",
    tipo:"",
    fecha_a:new Date(),
    fecha_t:new Date(),
    estado:""
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardarNota(fu:NgForm){
      this.nota = fu.value
      console.log(this.nota);
  }

}
