import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorasRoutingModule } from './editoras-routing.module';  // Importa as rotas das editoras
import { EditorasFormComponent } from './editoras-form/editoras-form.component';  // Importa os componentes standalone
import { EditorasListComponent } from './editoras-list/editoras-list.component';  // Importa os componentes standalone

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditorasRoutingModule,
    EditorasFormComponent,  // Importa standalone component
    EditorasListComponent   // Importa standalone component
  ]
})
export class EditorasModule { }
