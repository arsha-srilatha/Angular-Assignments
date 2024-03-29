import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit, OnDestroy {
  //Variables
  employee: Employee = {
    name: '',
    id: 0,
    attendance: false,
  };
  observe: Subscription = new Subscription();
  constructor(
    private route: ActivatedRoute,
    private empService: EmployeeService
  ) {}

  ngOnInit(): void {
    //Fetch employee data from route
    this.observe = this.route.data.subscribe((data: Data) => {
      this.employee.name = data['employee'].name;
      this.employee.id = data['employee'].id;
      if (
        data['employee'].attendance == 'true' ||
        data['employee'].attendance == true
      ) {
        this.employee.attendance = true;
      } else if (
        data['employee'].attendance == 'false' ||
        data['employee'].attendance == false
      ) {
        this.employee.attendance = false;
      }
    });
  }

  displayEmployee() {
    this.empService.employeeViewed.next(2);
  }

  ngOnDestroy() {
    this.observe.unsubscribe(); //observable won't get destroyed once navigated from component. Thus, needs to be done manually.
  }
}
