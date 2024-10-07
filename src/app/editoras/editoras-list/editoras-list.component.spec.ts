import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditorasListComponent } from './editoras-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa o módulo de testes do HttpClient
import { provideRouter } from '@angular/router'; // Para simulação de rotas

describe('EditorasListComponent', () => {
  let component: EditorasListComponent;
  let fixture: ComponentFixture<EditorasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorasListComponent, HttpClientTestingModule], // Inclui HttpClientTestingModule
      providers: [provideRouter([])] // Simulação de rotas
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
