import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosListComponent } from './livros-list/livros-list.component';
import { LivrosFormComponent } from './livros-form/livros-form.component';

const routes: Routes = [
  { path: '', component: LivrosListComponent },  // Lista de Livros
  { path: 'new', component: LivrosFormComponent },  // Criar novo Livro
  { path: ':id/edit', component: LivrosFormComponent }  // Editar um Livro
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }