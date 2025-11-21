import { Component, OnInit } from '@angular/core';
import { AlargadorDeFrases } from '../../services/alargador-de-frases';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-saludo',
  imports: [NgClass],
  templateUrl: './saludo.html',
  styleUrl: './saludo.css',
})
export class Saludo implements OnInit {
  constructor(private alargador: AlargadorDeFrases) { }

  ngOnInit(): void {
    let nuevaFrase = this.alargador.alargarFrase("Buenos días!");
    console.log(nuevaFrase);
  }

  frase() {
    return this.alargador.alargarFrase("Buenos días");
  }

  clase(): string {
    return this.alargador.getClase();
  }

  cambiarModo() {
    this, this.alargador.setClase();
  }
}
