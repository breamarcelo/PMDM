import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, MatMenuModule, MatSlideToggleModule, FormsModule, CommonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar implements OnInit, OnDestroy {
  isChecked = true;
  intervalo !: any;

  cambiarFondo() {
    return this.isChecked ? { 'background-color': 'lightblue' } : { 'background-color': 'transparent' };
  }

  cambiarClase() {
    return this.isChecked ? "fondo-azul" : "fondo-transparente";
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }

  ngOnInit(): void {
    this.cambiarIsChecked();

    console.log("entramos en ngOnInit");
  }

  cambiarIsChecked() {
    this.intervalo = setInterval(() => { this.isChecked = !this.isChecked; console.log(this.isChecked) }, 1000);
  };
}
