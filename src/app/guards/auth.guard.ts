import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: Auth, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return new Promise((resolve) =>
      this.auth.onAuthStateChanged((user) => {
        if (user !== null) return resolve(true);
        return resolve(this.router.parseUrl(''));
      })
    );
  }
}
