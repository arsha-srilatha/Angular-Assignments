import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard {
  canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : 
   boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> => {
    const loggedState: boolean = this.auth.loggedState();
     return loggedState;
   }

   canActivateChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : 
   boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> => {
    return this.canActivate(route, state);
   }
    
   constructor(private auth: AuthService, private router: Router) {}
}