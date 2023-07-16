import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateService implements CanDeactivate<CanComponentDeactivate> {

  constructor() { }
  canDeactivate(component: CanComponentDeactivate,
     currentRoute: ActivatedRouteSnapshot,
      currentState: RouterStateSnapshot,
       nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return  component.canDeactivate();
  }
}
