import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'livros', loadChildren: () => import('./livros/livros.module').then(m => m.LivrosModule) },
  { path: 'editoras', loadChildren: () => import('./editoras/editoras.module').then(m => m.EditorasModule) },
  { path: '', component: HomeComponent },  // Mostra a página inicial no root
  { path: '**', redirectTo: '/livros' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
