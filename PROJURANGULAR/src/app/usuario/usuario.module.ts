import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { MasterComponent } from './master/master.component';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../service/usuario/usuario.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    MasterComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    UsuarioRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,


  ],
  providers:[
    UsuarioService,
    DatePipe
  ]
})
export class UsuarioModule { }
