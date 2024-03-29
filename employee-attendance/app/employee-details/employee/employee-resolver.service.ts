import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

@Injectable()
export class EmployeeResolve {
  constructor(private empService: EmployeeService) {}

  resolve: ResolveFn<Employee | undefined> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<Employee | undefined>
    | Promise<Employee | undefined>
    | Employee
    | undefined => {
    return this.empService.getEmployee(+route.params['id']);
  };
}
