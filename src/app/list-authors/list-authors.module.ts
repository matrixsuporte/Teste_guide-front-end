import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAuthorsComponent } from './list-authors.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListAuthorsComponent],
  exports: [ListAuthorsComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ListAuthorsModule { }
