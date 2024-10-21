import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false; // Stato dell'autenticazione

  login() {
    this.isAuthenticated = true; // Simula il login
  }

  logout() {
    this.isAuthenticated = false; // Simula il logout
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated; // Verifica se l'utente è autenticato
  }
}
