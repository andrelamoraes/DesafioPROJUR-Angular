import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbCalendar, NgbDate, NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(
    private activated : ActivatedRoute,
    private service: UsuarioService,
    private toastr: ToastrService,
    private router: Router,
    private ngbCalendar: NgbCalendar) {}

  campData !: NgbDateStruct;
  model : any;
  idUsuario!: number;
  datepickerOptions : any;
  limitDate : any;
  ngOnInit(): void {
    this.idUsuario = this.activated.snapshot.params.id;
    console.log(this.idUsuario)
    if(this.idUsuario != null) {
      this.service.getById(this.idUsuario).subscribe(e => {
        this.model = e;
      });
    }else{
      this.model = {}
    }

    this.limitDate  = this.ngbCalendar.getToday();

  }

escolaridade = [{escolaridade:'Infantil',id: 1},{escolaridade: 'Fundamental', id: 2},{escolaridade:'Médio',id: 3},{escolaridade: 'Superior', id: 5}]



onSubmit(){

if(this.idUsuario == null){
  this.model.dataNascimento  =  this.updateSelectedDate(this.model.dataNascimento)
  this.service.post(this.model).subscribe(x=>{
    this.toastr.success('Cadastrado com sucesso!');
    this.router.navigate(['/usuario']);
  },error => {
    this.toastr.error('Ocorreu um erro ao cadastrar');
  });
}else{
  this.model.dataNascimento  =  this.updateSelectedDate(this.model.dataNascimento)
  this.service.put(this.model).subscribe(x=>{
    this.toastr.success('Atualizado com sucesso!');
    this.router.navigate(['/usuario']);
  },error => {
    this.toastr.error('Ocorreu um erro ao atualizar');
  });
}

}

public updateSelectedDate(date: NgbDate) {
  return new Date(date.year, date.month, date.day);
}

}
