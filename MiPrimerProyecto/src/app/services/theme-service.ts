import { Injectable } from '@angular/core';
import { EmitHint } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  esOscuro: boolean = false;

  getEstado(): boolean {
    return this.esOscuro;
  }

  setEstado() {
    this.esOscuro = !this.esOscuro;
  }

  getClase(): string {
    return this.esOscuro ? "dark-mode" : "light-mode";
  }

}
