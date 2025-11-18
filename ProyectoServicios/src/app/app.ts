import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Saludo } from "./components/saludo/saludo";
import { Despedida } from "./components/despedida/despedida";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Saludo, Despedida],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProyectoServicios');
}
