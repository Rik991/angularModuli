import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service'; // Importa il servizio di autenticazione

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  // Protegge la rotta principale
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isLoggedIn = this.authService.isLoggedIn(); // Verifica se l'utente è loggato

    if (!isLoggedIn) {
      this.router.navigate(['/login']); // Se non autenticato, reindirizza al login
      return false;
    }

    return true; // Se autenticato, permette l'accesso
  }

  // Protegge le rotte figlie
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isLoggedIn = this.authService.isLoggedIn();

    if (!isLoggedIn) {
      this.router.navigate(['/login']); // Stessa logica per le rotte figlie
      return false;
    }

    return true;
  }
}
