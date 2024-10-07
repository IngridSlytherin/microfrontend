import { Component, OnInit } from '@angular/core';
import { EditorasService } from '../editoras.service';
import { RouterModule, Router } from '@angular/router';  // Importe o Router aqui
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editoras-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './editoras-list.component.html',
  styleUrls: ['./editoras-list.component.css']
})
export class EditorasListComponent implements OnInit {
  editoras: any[] = [];
  message: string | null = null;
  isModalOpen = false;  // Controla a exibição do modal
  editoraIdToDelete: number | null = null;  // Armazena o ID da editora a ser excluída

  // Injetar o Router no construtor
  constructor(private editorasService: EditorasService, private router: Router) {}

  ngOnInit(): void {
    this.editorasService.getEditoras().subscribe(data => {
      this.editoras = data;
    });
  }

  // Abre o modal de confirmação e armazena o ID da editora a ser excluída
  openModal(id: number): void {
    this.editoraIdToDelete = id;
    this.isModalOpen = true;
  }

  // Fecha o modal
  closeModal(): void {
    this.isModalOpen = false;
  }

  // Confirma a exclusão da editora e a remove da lista
  confirmDelete(): void {
    if (this.editoraIdToDelete !== null) {
      this.editorasService.deleteEditora(this.editoraIdToDelete).subscribe(() => {
        this.message = 'Editora excluída com sucesso!';
        this.editoras = this.editoras.filter(editora => editora.id !== this.editoraIdToDelete);
        this.closeModal();
      });
    }
  }

  // Método de navegação para edição
  onEdit(id: number): void {
    this.router.navigate(['/editoras', id, 'edit']);
  }
}
