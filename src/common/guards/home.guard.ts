import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { JwtValidService } from '../services/token-valid.service';

@Injectable({ providedIn: 'root' })
export class HomeGuard implements CanActivate {

    constructor(private _jwtValidService: JwtValidService, private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        // return !this._jwtValidService.isExpired();
        if (this._jwtValidService.isExpired()) {
            this._router.navigateByUrl('auth/login')
            return false;
        }

        return true;
    }
}

// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';

// @Injectable({providedIn: 'root'})
// export class NameGuard implements CanActivateChild {
//     constructor() { }

//     canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//         return true;
//     }
// }