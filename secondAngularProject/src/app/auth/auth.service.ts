import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { User } from './model/user.model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Token } from './model/token.model';
import { Util } from '../util/util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "http://localhost:3000/users"

  private currentUserSubject = new BehaviorSubject<User | null>(null); //NEW CHANGE - DECLARE CURRENT USER SUBJECT
  public currentUser = this.currentUserSubject.asObservable(); //NEW CHANGE - SET THE SUBJECT AS OBSERVABLE

  constructor(
    private httpClient: HttpClient
  ) {
    this.currentUserSubject.next(this.getCurrentUser()); //NEW CHANGE - INIT CURRENT USER SUBJECT WITH SESSION USER
  }

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

          Util.saveToLocalStorage('authToken', token.authToken);
          Util.saveToLocalStorage('currentUser', token.user);

          this.currentUserSubject.next(foundUser); //NEW CHANGE - SET THE USER TO THE SUBJECT IF FOUND

          return token;
        } else {
          this.currentUserSubject.next(null); //NEW CHANGE - SET NULL TO THE SUBJECT IF USER NOT FOUND

          return null;
        }
      })
    );
  }

  getRole(): string | null {
    const user = this.getCurrentUser();
    return user?.role || null;
  }

  isLoggedIn(): boolean {
    return Util.getFromLocalStorage('authToken') !== null;
  }

  logout(): void {
    Util.removeFromLocalStorage('authToken');
    Util.removeFromLocalStorage('currentUser');

    this.currentUserSubject.next(null); //NEW CHANGE - SET NULL TO THE SUBJECT AFTER LOGOUT
  }

  getCurrentUser(): User | null {
    const user = Util.getFromLocalStorage('currentUser');
    return user ? user : null;
  }

  getAuthToken(): string | null {
    return Util.getFromLocalStorage('authToken');
  }

}
