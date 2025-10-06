import { Component } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  imports: [],
  templateUrl: './semaforo.html',
  styleUrl: './semaforo.css'
})
export class Semaforo {
  numero: number = 10;
  frutas: string[] = ["Pera", "Banana", "Manzana", "Uva"];
  cuadrados: number[] = [1, 1, 0, 1, 0, 0, 1, 0, 0];

  incrementar() {
    if (this.numero < 10) {
      this.numero++;
    } else {
      this.numero = 10;
    }
  }
  decrementar() {
    if (this.numero > 0) {
      this.numero--;
    } else {
      this.numero = 0;
    }
  }
  reset() {
    this.numero = 10;
  }
}
