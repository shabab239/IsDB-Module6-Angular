import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { User } from './auth/model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondAngularProject';
  isAuthenticated: boolean = false;
  currentUser: User | null = new User();

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateAuthStatus();
    this.currentUser = this.authService.getCurrentUser();
  }

  updateAuthStatus() {
    this.isAuthenticated = this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.isAuthenticated = false;
  }
}
