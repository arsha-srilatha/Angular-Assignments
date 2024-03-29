import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  //Dummy employee list to start with.
  employeesDummy = [
    { name: 'Amy', id: 901, attendance: false },
    { name: 'Jonah', id: 905, attendance: true },
    { name: 'Glenn', id: 900, attendance: true },
  ];
  employees = [
    { name: 'Amy', id: 901, attendance: false },
    { name: 'Jonah', id: 905, attendance: true },
    { name: 'Glenn', id: 900, attendance: true },
  ];
  allowedLogins: number[] = [900, 901, 905];
  //Variables
  employeeViewed = new Subject<number>();
  constructor(private router: Router, private http: HttpClient) {}

  //Return the employee list
  getEmployees() {
    return this.employeesDummy;
  }

  //Return only the selected employee
  getEmployee(id: number): Employee | undefined {
    const employee: Employee | undefined = this.employees.find((emp) => {
      return emp.id == id;
    });
    return employee;
  }

  //Fetch employee list from backend
  fetchEmployees() {
    return this.http.get<{ name: string; id: number; attendance: boolean }[]>(
      'https://angular-sample-employee-portal-default-rtdb.firebaseio.com/employeelist.json'
    );
  }

  //Save employee list to backend
  saveEmployees(employeeList) {
    this.http
      .put(
        'https://angular-sample-employee-portal-default-rtdb.firebaseio.com/employeelist.json',
        employeeList
      )
      .subscribe(
        (response) => console.log('Employee List Saved.'),
        (error) => {
          alert(error);
        }
      );
  }

  //Revert employee list in backend
  deleteEmployees() {
    this.employees = this.getEmployees();
    this.http
      .put(
        'https://angular-sample-employee-portal-default-rtdb.firebaseio.com/employeelist.json',
        this.employees
      )
      .subscribe(
        (response) => console.log('Employee List Reverted.'),
        (error) => {
          alert(error);
        }
      );
  }

  //Add a new employee to the list
  onAddEmployee(ename: string, eid: number, att: boolean) {
    this.employees.push({ name: ename, id: +eid, attendance: <boolean>att });
    this.saveEmployees(this.employees);
    this.router.navigate(['/employee-details']);
  }

  //Edit the details of the selected employee.
  onEditEmployee(ename: string, eid: number, att: boolean) {
    for (let employee of this.employees) {
      if (employee.id == eid) {
        employee.name = ename;
        employee.attendance = att;
      }
    }
    this.saveEmployees(this.employees);
    this.employeeViewed.next(-1);
  }
}
