import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  employees: {name: string, id: number, experience: number}[] = [];
  selectedEmployee: number = -1;
  constructor(private empService: EmployeeService, private router: Router, private route: ActivatedRoute){
    this.employees = this.empService.employees;
  }

  onDelete(){
    this.empService.employees.splice(this.selectedEmployee, 1);
    this.selectedEmployee = -1;
  }

  onAdd() {
    this.router.navigate(['/employee-details/employee-details-edit'])
  }

  onEdit() {
    this.router.navigate(['/employee-details/employee-details-edit/'+this.empService.employees[this.selectedEmployee].id+'/'+this.empService.employees[this.selectedEmployee].name])
  }

 // onClick(){
    //this.router.navigate(['employee-details']) --> would not give an error like routerLink as this function do not know currently loaded path.
    //this.router.navigate(['employee-details',{relativeTo: this.route}]) --> would give an error as it will now try to load employee-details/employee-details which is not an existing path.
  //}
}
