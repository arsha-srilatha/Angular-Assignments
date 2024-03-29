import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from './auth/auth.service';
import { OnDutyService } from '../on-duty/on-duty.service';
import { EmployeeService } from '../employee-details/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  //Variables
  loggedIn: boolean = false;
  isAuthenticated: boolean = false;
  userSub = new Subscription();
  constructor(
    private router: Router,
    private auth: AuthService,
    private onduty: OnDutyService,
    private empService: EmployeeService
  ) {}

  ngOnInit(): void {}

  //Shortcut to visit employee list directly from Home Page.
  loadEmployee() {
    this.router.navigate(['/employee-details']);
  }

  //Logout from the application
  onLogout() {
    // this.onduty.deleteDutyList();
    // this.empService.deleteEmployees();
    this.auth.logout();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
