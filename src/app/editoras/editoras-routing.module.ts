import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorasFormComponent } from './editoras-form/editoras-form.component';  // Componente de formulário de editoras
import { EditorasListComponent } from './editoras-list/editoras-list.component';  // Componente de lista de editoras

const routes: Routes = [
  { path: '', component: EditorasListComponent },  // Rota padrão para listar editoras
  { path: 'new', component: EditorasFormComponent },  // Rota para criar uma nova editora
  { path: ':id/edit', component: EditorasFormComponent },  // Rota para editar uma editora
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // forChild para rotas modulares
  exports: [RouterModule]
})
export class EditorasRoutingModule { }
