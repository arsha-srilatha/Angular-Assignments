import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeComponent } from './employee-details/employee/employee.component';
import { OnDutyComponent } from './on-duty/on-duty.component';
import { OnDutyEditComponent } from './on-duty/on-duty-edit/on-duty-edit.component';
import { EmployeeDetailsEditComponent } from './employee-details/employee-details-edit/employee-details-edit.component';

import { ErrorPageComponent } from './error-page/error-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './employee-details/employee-details-edit/can-deactivate-guard.service';
import { CustomErrorComponent } from './custom-error/custom-error.component';
import { EmployeeResolve } from './employee-details/employee/employee-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeDetailsComponent,
    EmployeeComponent,
    OnDutyComponent,
    OnDutyEditComponent,
    EmployeeDetailsEditComponent,
    ErrorPageComponent,
    CustomErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, AuthService, CanDeactivateGuard, EmployeeResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
