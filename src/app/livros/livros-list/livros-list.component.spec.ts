// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { LivrosListComponent } from './livros-list.component';

// describe('LivrosListComponent', () => {
//   let component: LivrosListComponent;
//   let fixture: ComponentFixture<LivrosListComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [LivrosListComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(LivrosListComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LivrosListComponent } from './livros-list.component';
import { provideRouter } from '@angular/router'; // Import para simular rotas

describe('LivrosListComponent', () => {
  let component: LivrosListComponent;
  let fixture: ComponentFixture<LivrosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivrosListComponent], // Importar o componente standalone
      providers: [provideRouter([])] // Simulação de rotas
    }).compileComponents();

    fixture = TestBed.createComponent(LivrosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
