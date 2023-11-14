import { Injectable } from '@angular/core';
import { EmployeeService } from '../employee-details/employee.service';

@Injectable({
  providedIn: 'root'
})
export class OnDutyService {
  duties: string[] = ['cleaning', 'inventory', 'restocking', 'register', 'customer service', 'warehouse'];
  employees: string[] = [];
  constructor(private empService: EmployeeService) { 
    for(let employee of empService.employees){
      this.employees.push(employee.name);
    }
  }

 
 
}
