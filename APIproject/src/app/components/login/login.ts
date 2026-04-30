import { HttpClient } from '@angular/common/http';
import { Component, inject, Injectable } from '@angular/core';
import { AuthResponse } from '../../models/auth-response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

@Injectable({ providedIn: 'root' })
export class Login {
  private http = inject(HttpClient);
  private router = inject(Router);
  login() {
    const credentials = { username: 'marcelo', password: 'ABC123' };
    // Lanzamos asíncronamente un POST al servidor REST
    this.http.post<AuthResponse>('/api/auth/login', credentials)
      .subscribe({
        next: (res) => this.guardarToken(res.token)
      });
  }

  guardarToken(token: string) {
    // Lo escondemos en la guantera de la memoria del navegador
    localStorage.setItem('auth_token', token);
    this.router.navigate(['/libros']);
  }
}
