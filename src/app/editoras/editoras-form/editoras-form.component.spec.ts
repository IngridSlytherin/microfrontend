import { TestBed } from '@angular/core/testing';
import { EditorasFormComponent } from './editoras-form.component';
import { ActivatedRoute } from '@angular/router';  // Mock do ActivatedRoute
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Módulo de teste HTTP
import { of } from 'rxjs';

describe('EditorasFormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        EditorasFormComponent,  // Se standalone
        HttpClientTestingModule  // Simula as chamadas HTTP
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: () => '1' })  // Mock de paramMap para fornecer o ID
          }
        }
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(EditorasFormComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});


