import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export interface CanComponentDeactivate {
    canDeactivate: () =>  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>;
}

export class CanDeactivateGuard {
    canDeactivate: CanDeactivateFn<CanComponentDeactivate> = (
        component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) : 
   boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> => {
    return component.canDeactivate();
   }

}