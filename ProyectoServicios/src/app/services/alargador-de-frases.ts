import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlargadorDeFrases {
  nombre: string = "Pepe";
  esOscuro: boolean = false;

  constructor() { }

  alargarFrase(frase: string) {
    return frase + "             " + this.nombre;
  }

  setClase() {
    this.esOscuro = !this.esOscuro;
  }

  getClase() {
    return this.esOscuro ? "modoOscuro" : "modoClaro";
  }

  setNombre(nuevoNombre: string) {
    this.nombre = nuevoNombre;
  }
}
