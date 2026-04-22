import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro.model';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  private apiURL = "http://localhost:8080/api/libros/";

  constructor(private http: HttpClient) { }

  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.apiURL);
  }

  saveLibro(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(this.apiURL, libro);
  }


}
