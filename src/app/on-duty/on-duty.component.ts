import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceHolderDirective } from '../shared/place-holder.directive';
import { OnDutyService } from './on-duty.service';
import { EmployeeService } from '../employee-details/employee.service';

@Component({
  selector: 'app-on-duty',
  templateUrl: './on-duty.component.html',
  styleUrls: ['./on-duty.component.css'],
})
export class OnDutyComponent implements OnInit {
  //Variables
  empId: string = '';
  editAllowed: boolean = false;
  loggedIn: number;
  observe: Subscription = new Subscription();
  private alertSub = new Subscription();
  @ViewChild(PlaceHolderDirective) 'alertCmp': PlaceHolderDirective;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private onduty: OnDutyService,
    private empService: EmployeeService
  ) {
    this.loggedIn = this.onduty.empLoggedIn;
  }

  //Fetch fragments from the route
  ngOnInit(): void {
    this.observe = this.route.params.subscribe((params: Params) =>
      console.log('Params' + params)
    );
  }

  //Manage login to on-duty section using a service variable.
  empLogin(value: boolean) {
    if (value == true) {
      this.loggedIn = +this.empId;
      this.onduty.empLoggedIn = +this.empId;
    } else {
      this.loggedIn = 0;
      this.onduty.empLoggedIn = 0;
    }
  }

  //Edit Duties of the employees
  onEditDuties() {
    if (this.loggedIn !== 900) {
      this.accessDenied(this.loggedIn);
    } else {
      this.router.navigate(['on-duty-edit', '900'], {
        relativeTo: this.route,
        queryParamsHandling: 'preserve',
        fragment: 'editing',
      });
    }
  }

  //Show alert box if an employee tries to edit the list except store manager.
  private accessDenied(empId) {
    const alertBox = this.alertCmp.view;
    alertBox.clear();
    const cmpRef = alertBox.createComponent(AlertComponent);
    cmpRef.instance.id = empId;
    this.alertSub = cmpRef.instance.close.subscribe(() => {
      this.alertSub.unsubscribe();
      alertBox.clear();
    });
  }
}
