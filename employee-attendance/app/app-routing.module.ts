import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './home/auth/auth.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeComponent } from './employee-details/employee/employee.component';
import { EmployeeDetailsEditComponent } from './employee-details/employee-details-edit/employee-details-edit.component';
import { OnDutyComponent } from './on-duty/on-duty.component';
import { OnDutyEditComponent } from './on-duty/on-duty-edit/on-duty-edit.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CustomErrorComponent } from './custom-error/custom-error.component';
//Services
import { AuthGuard } from './home/auth/auth-guard.service';
import { CanDeactivateGuard } from './employee-details/employee-details-edit/can-deactivate-guard.service';
import { EmployeeResolve } from './employee-details/employee/employee-resolver.service';

const appRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'employee-details',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: EmployeeDetailsComponent,
    children: [
      {
        path: 'employee/:id/:name',
        component: EmployeeComponent,
        resolve: { employee: EmployeeResolve },
      },
      {
        path: 'employee-details-edit',
        component: EmployeeDetailsEditComponent,
        canDeactivate: [CanDeactivateGuard],
      },
      {
        path: 'employee-details-edit/:id/:name',
        component: EmployeeDetailsEditComponent,
        canDeactivate: [CanDeactivateGuard],
      },
    ],
  },
  {
    path: 'on-duty',
    canActivate: [AuthGuard],
    component: OnDutyComponent,
    children: [
      { path: ':id', component: OnDutyEditComponent },
      {
        path: 'on-duty-edit/:id',
        component: OnDutyEditComponent,
        canDeactivate: [CanDeactivateGuard],
      },
    ],
  },
  {
    path: 'error',
    component: CustomErrorComponent,
  },
  { path: 'not-found', component: ErrorPageComponent },
  { path: '**', redirectTo: '/not-found' }, //always add at the end of all definite paths.
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
