// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { NavComponent } from './nav/nav.component'; // Importe o componente de navegação

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterModule, NavComponent],  // Adicione o NavComponent nos imports
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'LivrosEditoras';
// }

// import { Component } from '@angular/core';

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Necessário para usar o router-outlet
import { NavComponent } from './nav/nav.component'; // Certifique-se de importar o NavComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,   // Marca o componente como standalone
  imports: [
    RouterModule,      // Necessário para o router-outlet
    NavComponent       // Importa o componente de navegação
  ]
})
export class AppComponent {
  title = 'Minha Aplicação';
}
