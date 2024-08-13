import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(
    protected authService: AuthService, // NEW CHANGE - CHANGED TO PROTECTED SO THAT IT CAN BE ACCESSED FROM THE HTML PAGE DIRECTLY
    private router: Router
  ) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  
}
