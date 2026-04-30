import { Component } from '@angular/core';
import { Libro } from '../../models/libro.model';
import { LibroService } from '../../services/libro-service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-listar-libros',
  imports: [MatCardModule],
  templateUrl: './listar-libros.html',
  styleUrl: './listar-libros.css',
})
export class ListarLibros {
  libros: Libro[] = [];

  constructor(private libroService: LibroService) { }
  ngOnInit(): void {
    this.libroService.getLibros().subscribe({
      next: (data) => {
        this.libros = data;
        console.log(data);
        console.log('Libros cargados con éxito');
      },
      error: (err) => console.error('Error al conectar con Spring Boot', err)
    });
  }
}
