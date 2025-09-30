import { Component } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  imports: [],
  templateUrl: './semaforo.html',
  styleUrl: './semaforo.css'
})
export class Semaforo {
  numero: number = 0;
  incrementar() {
    if (this.numero < 10) {
      this.numero++;
    }
  }
  decrementar() {
    if (this.numero > 0) {
      this.numero--;
    }
  }
  reset() {
    this.numero = 0;
  }
}
