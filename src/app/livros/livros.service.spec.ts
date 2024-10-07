// import { TestBed } from '@angular/core/testing';

// import { LivrosService } from './livros.service';

// describe('LivrosService', () => {
//   let service: LivrosService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(LivrosService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

import { TestBed } from '@angular/core/testing';
import { LivrosService } from './livros.service';

describe('LivrosService', () => {
  let service: LivrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivrosService);

    // Simular um estado inicial do LocalStorage para os testes
    localStorage.clear();
    localStorage.setItem('livros', JSON.stringify([
      { id: 1, title: 'Livro 1', author: 'Autor 1' },
      { id: 2, title: 'Livro 2', author: 'Autor 2' }
    ]));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all livros', () => {
    const livros = service.getLivros();
    expect(livros.length).toBe(2);
  });

  it('should save a new livro', () => {
    const newLivro = { id: 3, title: 'Livro 3', author: 'Autor 3' };
    service.saveLivro(newLivro);

    const livros = service.getLivros();
    expect(livros.length).toBe(3);
    expect(livros[2].title).toBe('Livro 3');
  });

  it('should get a livro by id', () => {
    const livro = service.getLivroById(1);
    expect(livro).toBeTruthy();
    expect(livro?.title).toBe('Livro 1');
  });

  it('should update an existing livro', () => {
    const updatedLivro = { id: 1, title: 'Livro 1 Atualizado', author: 'Autor Atualizado' };
    service.updateLivro(updatedLivro);

    const livro = service.getLivroById(1);
    expect(livro?.title).toBe('Livro 1 Atualizado');
  });

  it('should delete a livro by id', () => {
    service.deleteLivro(1);
  
    const livros = service.getLivros();
    expect(livros.find((livro: { id: number; title: string; author: string }) => livro.id === 1)).toBeUndefined();
  });
  
});
