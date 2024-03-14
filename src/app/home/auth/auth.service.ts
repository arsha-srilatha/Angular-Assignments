import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, catchError, tap } from 'rxjs';
import { Router } from '@angular/router';

import { User } from './user.model';

import { environment } from 'src/environments/environment';

export interface AuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registerd?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  //Variables
  user = new BehaviorSubject<User>(null);
  loggedOut = new Subject<boolean | undefined>();
  private tokenExpirationTimer: any;
  constructor(private http: HttpClient, private router: Router) {}

  //Sign up a new user to Firebase Backend
  signupUser(empEmail, empPassword) {
    return this.http
      .post<AuthResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
          environment.firebaseAPIKey,
        {
          email: empEmail,
          password: empPassword,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((errorRes) => {
          let errorMessage = 'An unkown error occured !!!';
          if (!errorRes.error || !errorRes.error.error) {
            const err = new Error(errorRes);
            throw err;
          }
          switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage =
                'The email address is already in use by another account.';
          }
          const err = new Error(errorMessage);
          throw errorMessage;
        }),
        tap((resData) => {
          const expirationDate = new Date(
            new Date().getTime() + +resData.expiresIn * 1000
          );
          const _user = new User(
            resData.email,
            resData.localId,
            resData.idToken,
            expirationDate
          );
          this.user.next(_user);
        })
      );
  }

  //Login an existing user in the Firebase backend
  login(empEmail, empPassword) {
    this.loggedOut.next(false);
    return this.http
      .post<AuthResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
          environment.firebaseAPIKey,
        {
          email: empEmail,
          password: empPassword,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((errorRes) => {
          let errorMessage = 'An unkown error occured !!!';
          if (!errorRes.error || !errorRes.error.error) {
            const err = new Error(errorRes);
            throw err;
          }
          switch (errorRes.error.error.message) {
            case 'EMAIL_NOT_FOUND':
              errorMessage =
                'There is no user record corresponding to this identifier. The user may have been deleted.';
              break;
            case 'INVALID_PASSWORD':
              errorMessage =
                'The password is invalid or the user does not have a password.';
              break;
            case 'INVALID_LOGIN_CREDENTIALS':
              errorMessage = 'The login credentials are invalid.';
              break;
          }
          const err = new Error(errorMessage);
          throw errorMessage;
        }),
        tap((resData) => {
          const expirationDate = new Date(
            new Date().getTime() + +resData.expiresIn * 1000
          );
          const _user = new User(
            resData.email,
            resData.localId,
            resData.idToken,
            expirationDate
          );
          this.user.next(_user);
          this.autoLogout(+resData.expiresIn * 1000);
          localStorage.setItem('userData', JSON.stringify(_user));
        })
      );
  }

  //Login the user automatically if the access token is valid.
  autoLogin() {
    const user: {
      email: string;
      id: string;
      _token: string;
      _tokenExpiration: string;
    } = JSON.parse(localStorage.getItem('userData'));

    if (!user) {
      return;
    }
    const loadedUser = new User(
      user.email,
      user.id,
      user._token,
      new Date(user._tokenExpiration)
    );
    if (loadedUser.token) {
      this.loggedOut.next(false);
      this.user.next(loadedUser);
      this.autoLogout(
        new Date(user._tokenExpiration).getTime() - new Date().getTime()
      );
    }
  }

  //Logout the user from the application
  logout() {
    this.loggedOut.next(true);
    this.user.next(null);
    this.router.navigate(['/']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      this.tokenExpirationTimer.clear();
    }
    this.tokenExpirationTimer = null;
  }

  //Automatically logout the user when the access token expires.
  autoLogout(tokenExpiration) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, tokenExpiration);
  }
}
