import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { LivrosFormComponent } from './livros-form.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('LivrosFormComponent', () => {
  let component: LivrosFormComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivrosFormComponent],  // Importar o componente standalone
      providers: [
        provideRouter([]), // Simulação de rotas
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 'test-id' }) // Simula os parâmetros de rota
          }
        }
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(LivrosFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

