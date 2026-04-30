import { inject, Injectable } from '@angular/core';
import { Libro } from '../models/libro.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  // 1. Inyectamos la herramienta interna de Angular
  private http = inject(HttpClient);

  // 2. Peticiones limpias (El Interceptor las sellará invisibles)
  getLibros() {
    return this.http.get<Libro[]>('/api/libros/');
  }

  crearLibro(libro: Libro) {
    return this.http.post<Libro>('/api/libros/', libro);
  }

  actualizarLibro(id: number, datos: Partial<Libro>) {
    return this.http.put<Libro>(`/api/libros/${id}`, datos);
  }

  borrarLibro(id: number) {
    return this.http.delete(`/api/libros/${id}`);
  }
}
