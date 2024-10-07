// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { NavComponent } from './nav.component';

// describe('NavComponent', () => {
//   let component: NavComponent;
//   let fixture: ComponentFixture<NavComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [NavComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(NavComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavComponent } from './nav.component';
import { provideRouter } from '@angular/router';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavComponent],
      providers: [provideRouter([])] // Simulação do provedor de rotas
    }).compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
