import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Juego } from "./components/juego/juego";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Juego],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MataTopos');
}