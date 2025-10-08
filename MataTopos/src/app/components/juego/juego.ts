import { Component } from '@angular/core';

@Component({
  selector: 'app-juego',
  imports: [],
  templateUrl: './juego.html',
  styleUrl: './juego.css'
})
export class Juego {
  casillas: number[] = [0, 0, 0, 0, 1, 0, 0, 0, 0];
  puntuacion: number = 0;

  actualizarPuntuacion(casilla: number) {
    if (casilla == 1) {
      this.puntuacion++;
    } else {
      this.puntuacion--;
    }
  }
}
