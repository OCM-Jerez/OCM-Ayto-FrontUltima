import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { JwtValidService } from '../services/token-valid.service';

@Injectable({ providedIn: 'root' })
export class HomeGuard implements CanActivate {
    constructor(private _jwtValidService: JwtValidService, private _router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (this._jwtValidService.isExpired()) {
            this._router.navigateByUrl('auth/login')
            return false;
        }

        return true;
    }
}
