import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosService } from '../livros/livros.service';
import { EditorasService, Editora } from '../editoras/editoras.service'; // Importando o tipo Editora
import { RouterModule } from '@angular/router';

export interface Livro {
  id: number;
  title: string;
  author: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  livros: Livro[] = [];
  editoras: Editora[] = [];

  constructor(private livrosService: LivrosService, private editorasService: EditorasService) {}

  ngOnInit(): void {
    // Buscar livros e editoras
    const livrosData = this.livrosService.getLivros();
    this.livros = livrosData.slice(0, 3); // Pega apenas os 3 primeiros livros

    this.editorasService.getEditoras().subscribe((data: Editora[]) => {
      this.editoras = data.slice(0, 3); // Pega apenas as 3 primeiras editoras
    });
  }
}
