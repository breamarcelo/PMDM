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

  generarTablero() {
    let num: number = this.casillas.indexOf(1);
    let rand: number = Math.floor(Math.random() * 8);
    while (num == rand) {
      rand = Math.floor(Math.random() * 8);
    }
    num = rand;
    for (let i = 0; i < 8; i++) {
      if (i != num) {
        this.casillas[i] = 0;
      } else if (i == num) {
        this.casillas[i] = 1;
      }
    }
  }

  actualizarPuntuacion(casilla: number) {
    if (casilla == 1) {
      this.puntuacion++;
      this.generarTablero();
    } else {
      this.puntuacion--;
    }
  }
}
