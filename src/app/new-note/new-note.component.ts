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
  message: any="";
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

  async register({value, valid}: {value: Note, valid: boolean }){
    console.log(value, valid)
    if(valid){
      try{
        //this.message=await this.userService.registertUser(value)
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

}
