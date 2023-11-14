import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { Injectable } from '@angular/core';

interface Employee{
  name: string;
  id: number;
  experience: number;
}
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees = [{name: 'Amy', id: 901, experience: 15 },
              { name: 'Jonah', id: 905, experience: 5},
              { name: 'Glenn', id: 900, experience: 25}];
  constructor() { }
  getEmployees(){
    return this.employees;
  }
  getEmployee(id: number): Employee | undefined{
    const employee : Employee | undefined = this.employees.find(
      (emp) => {
        return emp.id == id;
      }
    );
    return employee;
  }

  onAddEmployee(ename:string, eid: number, exp: number){
    this.employees.push({name: ename, id: eid, experience: exp});
  }

  onEditEmployee(ename:string, eid: number, exp: number){
    for(let employee of this.employees){
      if(employee.id == eid){
        employee.name = ename;
        employee.experience = exp;
      }
    }
  }
}
