import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { MasterComponent } from './master/master.component';

const routes: Routes = [
  {path : '', component : MasterComponent},
  {path : 'editar/:id', component : DetailComponent},
  {path : 'novo', component : DetailComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
