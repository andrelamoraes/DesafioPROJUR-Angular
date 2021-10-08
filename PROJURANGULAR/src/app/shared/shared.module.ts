import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GridComponent } from "./grid/grid.component";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    GridComponent
  ]
})
export class SharedModule { }
