import { Component, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-details-edit',
  templateUrl: './employee-details-edit.component.html',
  styleUrls: ['./employee-details-edit.component.css']
})
export class EmployeeDetailsEditComponent implements CanComponentDeactivate {
  empName: string = '';
  empId: number = 0;
  empExp: number = 0;
  disableId: boolean = false;
  employeeAdded: boolean = false;

  constructor(private empService: EmployeeService, private route: ActivatedRoute, private router: Router){
    this.empName = this.route.snapshot.params['name'];
    this.empId = this.route.snapshot.params['id'];
    if(this.route.snapshot.params['id']) {
      this.disableId = true;
    }
  }
  onAdd(){
    this.empService.onAddEmployee(this.empName, this.empId, this.empExp);
    this.employeeAdded = true;
    this.router.navigate(['/employee-details'], {relativeTo: this.route});
  }

  onEdit(){
    this.empService.onEditEmployee(this.empName, this.empId, this.empExp);
    this.employeeAdded = true;
    this.router.navigate(['/employee-details'], {relativeTo: this.route});
  }

  canDeactivate() : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if( !this.employeeAdded) {
      return confirm('Do you want to discard changes?')
    }
    else {
      return true;
    }
  }
}
