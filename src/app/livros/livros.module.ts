import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosRoutingModule } from './livros-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LivrosRoutingModule,
    ReactiveFormsModule
  ]
})
export class LivrosModule { }
