import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../auth/model/user.model';
import { AuthService } from '../auth/auth.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isRegisterMode = false;
  user: User = new User();
  errorMessage: string | null = null;

  constructor(
    private authService: AuthService,
    private appComponent: AppComponent,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.logout();
  }

  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
    this.errorMessage = null; 
  }

  login() {
    this.authService.login(this.user).subscribe({
      next: token => {
        if (token) {
          this.router.navigate(['/student']);
        } else {
          this.errorMessage = 'Invalid email or password';
        }
      },
      error: error => {
        this.errorMessage = 'An error occurred during login';
        console.error(error);
      }

    });
  }

  register() {
    this.authService.register(this.user).subscribe({
      next: user => {
        this.isRegisterMode = false;
        this.errorMessage = 'Registration successful! Please log in.';
      },
      error: error => {
        this.errorMessage = 'An error occurred during registration';
        console.error(error);
      }
    });
  }
}
