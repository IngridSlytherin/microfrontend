import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';  // Importe Validators
import { ActivatedRoute, Router } from '@angular/router';
import { EditorasService } from '../editoras.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editoras-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './editoras-form.component.html',
  styleUrls: ['./editoras-form.component.css']
})
export class EditorasFormComponent implements OnInit {

  editoraForm: FormGroup;
  editoraId: string | null = null;  // Altere o tipo para string | null
  message: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private editorasService: EditorasService,
    private router: Router
  ) {
    // Adicionando validação ao formulário
    this.editoraForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],  // Validação de campo obrigatório
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');  // Captura o ID da URL
    this.editoraId = id ? id : null;  // Mantém o ID como string
  
    if (this.editoraId) {
      // Chama o serviço para buscar a editora
      this.editorasService.getEditoraById(this.editoraId).subscribe({
        next: (editora) => {
          if (editora) {
            this.editoraForm.patchValue({
              name: editora.name
            });
          }
        },
        error: (err) => {
          this.message = 'Erro ao buscar a editora.';
        },
        complete: () => {
          console.log('Requisição concluída.');
        }
      });
    }
  }
  
  onSubmit() {
    if (this.editoraForm.invalid) {
      this.message = 'Por favor, preencha os campos corretamente.';
      return;
    }
  
    const editora = this.editoraForm.value;
  
    if (this.editoraId) {
      // Atualiza a editora existente
      this.editorasService.updateEditora(this.editoraId, editora).subscribe(() => {
        this.message = 'Editora atualizada com sucesso!';
        setTimeout(() => this.router.navigate(['/editoras']), 2000);
      });
    } else {
      // Cria uma nova editora
      this.editorasService.createEditora(editora).subscribe(() => {
        this.message = 'Editora criada com sucesso!';
        setTimeout(() => this.router.navigate(['/editoras']), 2000);
      });
    }
  }
}
