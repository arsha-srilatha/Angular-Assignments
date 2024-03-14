import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthResponse, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  //Variables
  isLoginMode: boolean = true;
  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}
  //Select mode of authentication
  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  //Submit the user authentication form
  onSubmit(authForm) {
    const email = authForm.value.emailId;
    const password = authForm.value.empPassword;
    let authObs: Observable<AuthResponse>;
    this.isLoading = true;
    if (authForm.invalid) {
      return;
    } else {
      if (this.isLoginMode) {
        authObs = this.authService.login(email, password);
      } else {
        authObs = this.authService.signupUser(email, password);
      }
    }

    authObs.subscribe(
      (response) => {
        this.isLoading = false;
        this.router.navigate(['/home']);
      },
      (errorMessage) => {
        this.isLoading = false;
        this.router.navigate(['/error'], { state: errorMessage });
      }
    );
  }
}
