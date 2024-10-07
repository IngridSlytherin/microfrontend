import { Component, OnInit } from '@angular/core';
import { LivrosService } from '../livros.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Adiciona o Router para navegação

@Component({
  selector: 'app-livros-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './livros-list.component.html',
  styleUrls: ['./livros-list.component.css']
})
export class LivrosListComponent implements OnInit {

  livros: any[] = [];
  message: string | null = null;
  isModalOpen = false;
  livroIdToDelete: number | null = null;

  constructor(
    private livrosService: LivrosService,
    private router: Router // Injeta o Router
  ) { }

  ngOnInit(): void {
    this.livros = this.livrosService.getLivros();  // Buscar os livros do LocalStorage
  }

  openModal(id: number): void {
    this.livroIdToDelete = id;  // Armazena o ID do livro a ser excluído
    this.isModalOpen = true;  // Abre o modal
  }

  closeModal(): void {
    this.isModalOpen = false;  // Fecha o modal
  }

  onEdit(id: number): void {
    this.router.navigate(['/livros', id, 'edit']);  // Navega para o formulário de edição
  }

  confirmDelete(): void {
    if (this.livroIdToDelete !== null) {
      try {
        this.livrosService.deleteLivro(this.livroIdToDelete);  // Exclui o livro
        this.livros = this.livrosService.getLivros();  // Atualiza a lista de livros
        this.message = 'Livro excluído com sucesso!';
        setTimeout(() => this.message = null, 2000);  // Remove a mensagem após 2 segundos
      } catch (error) {
        this.message = 'Erro ao excluir o livro.';  // Exibe mensagem de erro
        setTimeout(() => this.message = null, 2000);  // Remove a mensagem de erro após 2 segundos
      }
    }
    this.closeModal();  // Fecha o modal após a exclusão
  }
}
