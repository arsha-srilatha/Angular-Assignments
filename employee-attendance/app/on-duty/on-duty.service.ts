import { Injectable } from '@angular/core';
import { EmployeeService } from '../employee-details/employee.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OnDutyService {
  //Variables
  empLoggedIn: number = 0;

  //List of duties available.
  duties: string[] = [
    'cleaning',
    'inventory',
    'restocking',
    'register',
    'customer service',
    'warehouse',
    'absent',
  ];
  //Variable - array to store employee-duty combination
  ondutyListDummy: { name: string; duty: string }[] = [];
  ondutyList: { name: string; duty: string }[] = [];
  constructor(private empService: EmployeeService, private http: HttpClient) {}

  //Generates an initial list for the employee-duty combination as an example.
  getDutyList() {
    let i = 0;
    this.ondutyListDummy = [];
    for (let employee of this.empService.getEmployees()) {
      //Assign duty to only those employees who are present. Otherwise, mark absent.
      if (employee.attendance == true) {
        this.ondutyListDummy.push({
          name: employee.name,
          duty: this.duties[i],
        });
      } else {
        this.ondutyListDummy.push({
          name: employee.name,
          duty: this.duties[this.duties.length - 1],
        });
      }
      if (
        this.empService.employees.indexOf(employee) ==
        this.duties.length - 2
      ) {
        i = 0;
      } else i += 1;
    }
    return this.ondutyListDummy;
  }

  //Fetch On-duty list from Firebase.
  fetchDutyList() {
    return this.http.get<{ name: string; duty: string }[]>(
      'https://angular-sample-employee-portal-default-rtdb.firebaseio.com/dutylist.json'
    );
  }

  //Save the new duty list to the Firebase backend.
  saveDutyList(
    dutyList: { name: string; duty: string }[],
    isAuthenticated: string
  ) {
    this.http
      .put(
        'https://angular-sample-employee-portal-default-rtdb.firebaseio.com/dutylist.json',
        dutyList,
        {
          headers: new HttpHeaders({ Authenticated: isAuthenticated }),
        }
      )
      .subscribe(
        (response) => console.log('Duty List Saved.'),
        (error) => {
          alert(error);
        }
      );
  }

  //Update firebase backend if a new employee is added.
  newEmployeeAdded(ename: string, attendance: boolean | string) {
    if (attendance == true || attendance == 'true') {
      this.ondutyList.push({ name: ename, duty: 'to be assigned' });
    } else {
      this.ondutyList.push({ name: ename, duty: 'absent' });
    }
    this.http
      .put(
        'https://angular-sample-employee-portal-default-rtdb.firebaseio.com/dutylist.json',
        this.ondutyList
      )
      .subscribe(
        (response) => console.log('Duty List Updated.'),
        (error) => {
          alert(error);
        }
      );
  }

  employeeUpdated(ename: string, eatt) {
    this.ondutyList.forEach((item) => {
      if (item.name == ename) {
        if (eatt == false || eatt == 'false') {
          item.duty = 'absent';
        } else {
          item.duty = 'to be assigned';
        }
      }
    });
    this.http
      .put(
        'https://angular-sample-employee-portal-default-rtdb.firebaseio.com/dutylist.json',
        this.ondutyList
      )
      .subscribe(
        (response) => console.log('Duty List Updated.'),
        (error) => {
          alert(error);
        }
      );
  }

  //Revert any changes the user made to return the application to it's initial state on logout.
  deleteDutyList() {
    this.ondutyList = this.getDutyList();
    this.http
      .put(
        'https://angular-sample-employee-portal-default-rtdb.firebaseio.com/dutylist.json',
        this.ondutyList
      )
      .subscribe(
        (response) => console.log('Duty List Reverted.'),
        (error) => {
          alert(error);
        }
      );
  }
}
