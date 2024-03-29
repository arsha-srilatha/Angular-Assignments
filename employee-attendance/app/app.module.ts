//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
//Components
import { AppComponent } from './app.component';
import { AuthComponent } from './home/auth/auth.component';
import { HomeComponent } from './home/home.component';
import { EmployeeDetailsEditComponent } from './employee-details/employee-details-edit/employee-details-edit.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeComponent } from './employee-details/employee/employee.component';
import { OnDutyComponent } from './on-duty/on-duty.component';
import { OnDutyEditComponent } from './on-duty/on-duty-edit/on-duty-edit.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CustomErrorComponent } from './custom-error/custom-error.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AlertComponent } from './shared/alert/alert.component';
//Services
import { AuthGuard } from './home/auth/auth-guard.service';
import { CanDeactivateGuard } from './employee-details/employee-details-edit/can-deactivate-guard.service';
import { EmployeeResolve } from './employee-details/employee/employee-resolver.service';
import { AuthInterceptorService } from './home/auth/auth-interceptor.service';
import { AuthService } from './home/auth/auth.service';
//Directives
import { PlaceHolderDirective } from './shared/place-holder.directive';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    EmployeeDetailsComponent,
    EmployeeComponent,
    EmployeeDetailsEditComponent,
    OnDutyComponent,
    OnDutyEditComponent,
    ErrorPageComponent,
    CustomErrorComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceHolderDirective,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [
    AuthGuard,
    AuthService,
    CanDeactivateGuard,
    EmployeeResolve,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
