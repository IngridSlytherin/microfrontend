// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class LivrosService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private storageKey = 'livros';

  constructor() { }

  // Função para buscar todos os livros
  getLivros() {
    const livrosString = localStorage.getItem(this.storageKey);
    return livrosString ? JSON.parse(livrosString) : [];
  }

  // Função para salvar um livro
  saveLivro(livro: any) {
    const livros = this.getLivros();
    livros.push(livro);
    localStorage.setItem(this.storageKey, JSON.stringify(livros));
  }

  // Função para buscar um livro por ID
  getLivroById(id: number) {
    const livros = this.getLivros();
    return livros.find((livro: any) => livro.id === id);
  }

  // Função para deletar um livro
  deleteLivro(id: number) {
    const livros = this.getLivros();
    const updatedLivros = livros.filter((livro: any) => livro.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(updatedLivros));
  }

  // Função para atualizar um livro
  updateLivro(updatedLivro: any) {
    const livros = this.getLivros();
    const index = livros.findIndex((livro: any) => livro.id === updatedLivro.id);
    if (index !== -1) {
      livros[index] = updatedLivro;
      localStorage.setItem(this.storageKey, JSON.stringify(livros));
    }
  }
}
