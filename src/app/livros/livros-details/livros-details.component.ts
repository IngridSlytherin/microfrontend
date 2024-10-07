// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-livros-details',
//   standalone: true,
//   imports: [],
//   templateUrl: './livros-details.component.html',
//   styleUrl: './livros-details.component.css'
// })
// export class LivrosDetailsComponent {

// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livros-details',
  templateUrl: './livros-details.component.html',
  styleUrls: ['./livros-details.component.css']
})
export class LivrosDetailsComponent implements OnInit {

  livroId!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Pegar o ID da URL
    this.livroId = this.route.snapshot.paramMap.get('id')!;
  }
}
