import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/user.model';
import { map, Observable } from 'rxjs';
import { Token } from './model/token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "http://localhost:3000/users"

  constructor(
    private httpClient: HttpClient
  ) { }

  register(user: User): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl, user);
  }

  login(user: User): Observable<Token | null> {
    let params = new HttpParams();
    params = params.append('email', user.email);
    params = params.append('password', user.password);

    return this.httpClient.get<User[]>(`${this.baseUrl}`, { params }).pipe( // Using Get req temporarily as there is no backend
      map(users => {
        const foundUser = users.find(u => u.password === user.password);
        if (foundUser) {
          const authToken = btoa(`${user.email}:${user.password}`); // simple base64 encoding for token
          const token: Token = { authToken, user: foundUser };
          localStorage.setItem('authToken', token.authToken);
          localStorage.setItem('currentUser', JSON.stringify(token.user));
          return token;
        } else {
          return null;
        }
      })
    );
  }

  logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
      localStorage.removeItem('currentUser');
    }
  }

  isLoggedIn(): boolean {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('authToken') !== null;
    }
    return false;
  }

  getAuthToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('authToken');
    }
    return null;
  }

  getCurrentUser(): User | null {
    if (typeof window !== 'undefined') {
      const userJson = localStorage.getItem('currentUser');
      return userJson ? JSON.parse(userJson) : null;
    }
    return null;
  }


  getCurrentRole(): string | null {
    if (typeof window !== 'undefined') {
      const userJson = localStorage.getItem('currentUser');
      if (userJson) {
        let user: User = JSON.parse(userJson);
        return user.role;
      }
    }
    return null;
  }

}
