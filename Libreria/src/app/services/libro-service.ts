import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Libro } from '../models/libro.model';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  // 1. Inyectamos la herramienta interna de Angular
  private http = inject(HttpClient);

  // 2. Peticiones limpias (El Interceptor las sellará invisibles)
  getLibros() {
    return this.http.get<Libro[]>('http://localhost:8080/api/libros/');
  }

  crearLibro(Libro: Libro) {
    return this.http.post<Libro>('http://localhost:8080/api/libros/', Libro);
  }

  actualizarLibro(id: number, datos: Partial<Libro>) {
    return this.http.put<Libro>(`http://localhost:8080/api/libros/${id}`, datos);
  }

  borrarLibro(id: number) {
    return this.http.delete(`http://localhost:8080/api/libros/${id}`);
  }
}
