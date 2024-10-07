// import { TestBed } from '@angular/core/testing';

// import { EditorasService } from './editoras.service';

// describe('EditorasService', () => {
//   let service: EditorasService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(EditorasService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importe o HttpClientTestingModule
import { EditorasService } from './editoras.service';

describe('EditorasService', () => {
  let service: EditorasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]  // Adicione o HttpClientTestingModule aqui
    });
    service = TestBed.inject(EditorasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

