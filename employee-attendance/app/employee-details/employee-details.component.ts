import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  //Variables
  employees: Employee[] = [];
  selectedEmployee: number = -1;
  editing: boolean;
  loggedIn: boolean;
  isLoading: boolean = false;
  constructor(
    private empService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.editing = false;
    this.isLoading = true;
    this.empService.fetchEmployees().subscribe((response) => {
      console.log('isLoading' + this.isLoading);
      if (response == null) {
        this.employees = this.empService.getEmployees();
      } else {
        this.employees = response;
        this.empService.employees = this.employees;
      }
      this.isLoading = false;
      console.log('isLoading' + this.isLoading);
    });
  }
  ngOnInit() {
    this.empService.employeeViewed.subscribe((value) => {
      if (value == 2 || value == -1) {
        this.selectedEmployee = value;
      }
    });
  }

  //navigate to Edit page to add a new employee
  onAdd() {
    this.selectedEmployee = -1;
    this.router.navigate(['/employee-details/employee-details-edit']);
  }

  //navigate to Edit page to edit the selected employee
  onEdit() {
    this.router.navigate([
      '/employee-details/employee-details-edit/' +
        this.empService.employees[this.selectedEmployee].id +
        '/' +
        this.empService.employees[this.selectedEmployee].name,
    ]);
  }

  // onClick(){
  //this.router.navigate(['employee-details']) --> would not give an error like routerLink as this function do not know currently loaded path.
  //this.router.navigate(['employee-details',{relativeTo: this.route}]) --> would give an error as it will now try to load employee-details/employee-details which is not an existing path.
  //}
}
