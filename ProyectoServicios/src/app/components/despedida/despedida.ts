import { Component, OnInit } from '@angular/core';
import { AlargadorDeFrases } from '../../services/alargador-de-frases';

@Component({
  selector: 'app-despedida',
  imports: [],
  templateUrl: './despedida.html',
  styleUrl: './despedida.css',
})
export class Despedida implements OnInit {
  constructor(private alargador: AlargadorDeFrases) { }

  ngOnInit(): void {
    let nuevaFrase = this.alargador.alargarFrase("Hasta luego!");
    console.log(nuevaFrase);
  }

  cambiaNombre() {
    this.alargador.setNombre("Juan");
  }
}
