import { Component, Input, input } from '@angular/core';
import { Personaje } from '../../models/personaje';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tarjeta-personaje',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './tarjeta-personaje.html',
  styleUrl: './tarjeta-personaje.css'
})
export class TarjetaPersonaje {
  @Input() personajeEnviado!: Personaje;
}
