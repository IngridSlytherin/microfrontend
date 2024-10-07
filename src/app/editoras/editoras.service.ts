import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Editora {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class EditorasService {
  private apiUrl = 'http://localhost:3000/editoras';  // URL da API mock (ou real)

  constructor(private http: HttpClient) {}

  getEditoras(): Observable<Editora[]> {
    return this.http.get<Editora[]>(this.apiUrl);
  }

  getEditoraById(id: string): Observable<Editora> {
    return this.http.get<Editora>(`${this.apiUrl}/${id}`);
  }

  createEditora(editora: Editora): Observable<Editora> {
    return this.http.post<Editora>(this.apiUrl, editora);
  }

  // updateEditora(id: number, editora: any) {
  //   // Verifique se o método está realmente atualizando a editora com o ID fornecido
  //   return this.http.put(`/api/editoras/${id}`, editora);  // PUT para atualizar a editora
  // }

  updateEditora(id: string, editora: Editora): Observable<Editora> {
    return this.http.put<Editora>(`${this.apiUrl}/${id}`, editora);
  }

  deleteEditora(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
