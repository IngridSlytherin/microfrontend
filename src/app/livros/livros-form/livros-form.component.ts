import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';  // Importe Validators
import { ActivatedRoute, Router } from '@angular/router';
import { LivrosService } from '../livros.service';
import { CommonModule } from '@angular/common';  // Importe o CommonModule

@Component({
  selector: 'app-livros-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './livros-form.component.html',
  styleUrls: ['./livros-form.component.css']
})
export class LivrosFormComponent implements OnInit {

  livroForm: FormGroup;
  livroId: number | null = null;
  message: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private livrosService: LivrosService,
    private router: Router
  ) {
    // Adicionar validações para os campos
    this.livroForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],  // Validação de campo obrigatório e mínimo de 3 caracteres
      author: ['', [Validators.required, Validators.minLength(3)]]  // Validação de campo obrigatório e mínimo de 3 caracteres
    });
  }

  ngOnInit(): void {
    this.livroId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.livroId) {
      const livro = this.livrosService.getLivroById(this.livroId);
      if (livro) {
        this.livroForm.patchValue(livro);
      }
    }
  }

  onSubmit() {
    // Verificar se o formulário é válido antes de continuar
    if (this.livroForm.invalid) {
      this.message = 'Por favor, preencha os campos corretamente.';
      return;
    }

    const livro = {
      id: this.livroId ? this.livroId : Date.now(),
      ...this.livroForm.value
    };

    if (this.livroId) {
      this.livrosService.updateLivro(livro);
      this.message = 'Livro atualizado com sucesso!';
      setTimeout(() => this.router.navigate(['/livros']), 2000);
    } else {
      this.livrosService.saveLivro(livro);
      this.message = 'Livro criado com sucesso!';
      setTimeout(() => this.router.navigate(['/livros']), 2000);
    }
  }
}
