import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  esOscuro: boolean = true;

  getEstado(): boolean {
    return this.esOscuro;
  }

  setEstado() {
    return this.esOscuro = !this.esOscuro;
  }

  cambiarTema(): string {
    return this.esOscuro ? "dark-mode" : "light-mode";
  }
}
