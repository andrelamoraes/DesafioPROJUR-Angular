import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './usuario/detail/detail.component';

const routes: Routes = [
  {path: 'usuario', loadChildren: () => import('./usuario/usuario.module').then(e=> e.UsuarioModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
