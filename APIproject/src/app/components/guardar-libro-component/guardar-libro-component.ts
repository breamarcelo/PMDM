import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro.model';
import { LibroService } from '../../service/libro-service';

@Component({
  selector: 'app-guardar-libro-component',
  imports: [],
  templateUrl: './guardar-libro-component.html',
  styleUrl: './guardar-libro-component.css',
})
export class GuardarLibroComponent implements OnInit {
  nuevoLibro: Libro = { titulo: "Rayuela", autor: "Julio Cortázar", isbn: "ISBN-13: 9788420437484", anioPublicacion: 2019 }
  guardado?: Libro;

  constructor(private libroService: LibroService) { }
  ngOnInit(): void {
    this.libroService.saveLibro(this.nuevoLibro).subscribe({
      next: (data) => {
        this.guardado = data;
        console.log('Libro guardado correctamente');
      },
      error: (err) => console.error('Error conectando con API', err)
    })
  }
}
