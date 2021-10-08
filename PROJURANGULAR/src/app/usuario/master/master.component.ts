import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { GridDto } from 'src/app/shared/grid/grid.dto';
import IGrid from 'src/app/shared/grid/grid.interface';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent
implements OnInit,IGrid {

  constructor(public service : UsuarioService) { }

  grid !: GridDto;

  ngOnInit(): void {
    this.service.get()
    .subscribe(e=> {
      this.grid = this.montarGrid(e);
    });
  }

 montarGrid(itens : Array<any>) : GridDto {
  let colunas = ['Id','Nome','Sobrenome','Email','Data de Nascimento','Escolaridade'];
  let values = [];

  for (let item of itens){

    let valoresNested = [];

    valoresNested.push(item.id);
    valoresNested.push(item.nome);
    valoresNested.push(item.sobrenome);
    valoresNested.push(item.email);
    valoresNested.push(item.dataNascimento);
    valoresNested.push(item.escolaridade);

    values.push(valoresNested);
  }
    return new GridDto(colunas,values,'novo','editar');
  }

}
