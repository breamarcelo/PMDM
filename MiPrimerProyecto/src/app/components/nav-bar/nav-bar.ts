import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme-service';

@Component({
  selector: 'app-nav-bar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, MatMenuModule, MatSlideToggleModule, FormsModule, CommonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar implements OnInit {
  isChecked: boolean = true;
  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.isChecked = this.themeService.getEstado();
  }

  getClase(): string {
    return this.themeService.getClase();
  }

  cambiar() {
    this.themeService.setEstado();
  }

  getEstatus() {
    this.isChecked = this.themeService.getEstado();
  }
}
