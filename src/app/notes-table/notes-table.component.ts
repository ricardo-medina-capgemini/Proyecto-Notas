
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from 'src/interfaces/user/nota.module';
import { User } from 'src/interfaces/user/user.module';
import { NotesService } from '../service/notes.service';
//import Swal from 'sweetalert2';
@Component({
  selector: 'app-notes-table',
  templateUrl: './notes-table.component.html',
  styleUrls: ['./notes-table.component.css']
})
export class NotesTableComponent implements OnInit {
  @Input() route:string=""
  @Input() note:Note[]=[];
  @Input() nameUser:string=""




constructor(private noteservice: NotesService , private router:Router){}
  ngOnInit(): void {
    if(this.route!="/dashboard"){
      this.getNotes();
    }
  }

  async getNotes(){
    try{
      this.note = await this.noteservice.getNotes();
    }
    catch(err){
      console.log(err);
    }
  }

  Update($valor: any){
    console.log("entre a update" + $valor)
    this.router.navigate(["update-note" ,  { 'id': $valor }])
  }

  getId(): number {
    return parseInt(localStorage.posUser);
  }
  DeleteNote(note: Note){
    this.noteservice.DeleteNote(note)
  }

  showModal(note:Note){
    Swal.fire({
      title: '¿Estas Seguro de borrar?',
      text: "El cambio es irreversible",
      icon: 'info',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.DeleteNote(note)
      }
    })
  }

}

