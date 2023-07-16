import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateChildFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService implements CanActivate, CanActivateChild{

  
  constructor(private authservice:AuthService,private router:Router) { }
canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  return this.canActivate(childRoute,state)
  
}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
   boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   return this.authservice.isAuthenticated().then(value=>{
      if (value){
        return true
      }else{
        this.router.navigate(['Category'])
        return false
      }
    })
  }
}
