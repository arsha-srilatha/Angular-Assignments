import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from './home/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  //Variables
  isAuthenticated: boolean;
  userSub = new Subscription();
  loggedOut: boolean;

  constructor(private auth: AuthService, private router: Router) {}
  //ngOnInit checks whether the user is authenticated when the application restarts.
  ngOnInit(): void {
    this.auth.autoLogin();
    this.auth.loggedOut.subscribe((value) => {
      this.loggedOut = value;
    });
    this.userSub = this.auth.user.subscribe((user) => {
      this.isAuthenticated = !user.email ? false : true;
      if (this.isAuthenticated) {
        this.router.navigate(['/home']);
      }
    });
  }

  ngOnDestroy(): void {
    this.isAuthenticated = false;
  }
}
