import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro.model';
import { LibroService } from '../../service/libro-service';

@Component({
  selector: 'app-libro-lista-component',
  imports: [],
  templateUrl: './libro-lista-component.html',
  styleUrl: './libro-lista-component.css',
})
export class LibroListaComponent implements OnInit {
  libros: Libro[] = [];

  constructor(private libroService: LibroService) { }
  ngOnInit(): void {
    this.libroService.getLibros().subscribe({
      next: (data) => {
        this.libros = data;
        console.log('Libros cargados con éxito');
      },
      error: (err) => console.error('Error al conectar con Spring Boot', err)
    });
  }

}
