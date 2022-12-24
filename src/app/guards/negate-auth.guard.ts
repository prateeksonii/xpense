import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuard } from './auth.guard';

@Injectable({
  providedIn: 'root',
})
export class NegateAuthGuard implements CanActivate {
  constructor(private authGuard: AuthGuard, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Promise(async (resolve) => {
      const isLoggedIn = await this.authGuard.canActivate(route, state);
      if (isLoggedIn) {
        this.router.navigate(['dashboard'], { replaceUrl: true });
        return resolve(false);
      }

      return resolve(true);
    });
  }
}
