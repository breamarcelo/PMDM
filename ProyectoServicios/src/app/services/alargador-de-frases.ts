import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlargadorDeFrases {
  nombre: string = "Pepe";

  constructor() { }

  alargarFrase(frase: string) {
    return frase + "             " + this.nombre;
  }

  setNombre(nuevoNombre: string) {
    this.nombre = nuevoNombre;
  }
}
