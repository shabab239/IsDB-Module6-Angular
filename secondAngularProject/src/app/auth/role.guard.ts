import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRole = route.data['role'];
    const currentRole = this.authService.getCurrentRole();
    if (currentRole && currentRole === expectedRole) {
      return true;
    } else {
      this.router.navigate(['/login']); // Redirect to login page if unauthorized
      return false;
    }
  }
}