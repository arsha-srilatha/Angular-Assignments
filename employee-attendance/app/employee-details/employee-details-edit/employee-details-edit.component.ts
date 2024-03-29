import { Component } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { EmployeeService } from '../employee.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { OnDutyService } from 'src/app/on-duty/on-duty.service';

@Component({
  selector: 'app-employee-details-edit',
  templateUrl: './employee-details-edit.component.html',
  styleUrls: ['./employee-details-edit.component.css'],
})
export class EmployeeDetailsEditComponent implements CanComponentDeactivate {
  //Variables
  empName: string = '';
  empId: number = 0;
  empAtt: boolean;
  disableName: boolean = false;
  employeeAdded: boolean = false;

  constructor(
    private empService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private onduty: OnDutyService
  ) {
    //Fetch data from the routes
    this.empName = this.route.snapshot.params['name'];
    this.empId = this.route.snapshot.params['id'];

    if (this.route.snapshot.params['id']) {
      this.disableName = true;
    }
  }
  //Add new employee. Update all services and backend.
  onAdd() {
    this.onduty.newEmployeeAdded(this.empName, this.empAtt);
    this.empService.onAddEmployee(this.empName, this.empId, this.empAtt);
    this.employeeAdded = true;
    this.router.navigate(['/employee-details'], { relativeTo: this.route });
  }

  //Edit an employee. Update all services and backend.
  onEdit(empAtt) {
    this.onduty.employeeUpdated(this.empName, empAtt);
    this.empService.onEditEmployee(this.empName, this.empId, this.empAtt);
    this.employeeAdded = true;
    this.router.navigate(['/employee-details'], { relativeTo: this.route });
  }

  //Called if user navigates away before saving the changes.
  canDeactivate():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (!this.employeeAdded) {
      return confirm('Do you want to discard changes?');
    } else {
      return true;
    }
  }
}
