import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  
  private token:string | null;

  constructor(private router:Router) {
    this.token = localStorage.getItem('token');
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean{

    console.log(this.token);
    if(this.token == null || this.token == '') {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
