import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { EMPTY, Observable } from 'rxjs';
import { JwtValidService } from '../services/token-valid.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor(private _jwtValidService: JwtValidService, private _router: Router) { }

    whiteList = ['auth', 'register'];

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this._urlWhiteList(req.url)) {
            return next.handle(req);
        }

        if (this._jwtValidService.isExpired()) {
            this._router.navigateByUrl('');
            return EMPTY;
        }

        const token = this._jwtValidService.getToken();
        if (!token) {
            this._router.navigateByUrl('');
            return EMPTY;
        }

        const headers = req.headers
            .set('Authorization', `Bearer ${token}`);

        const authReq = req.clone({ headers });

        return next.handle(authReq);
    }

    private _urlWhiteList(url: string): boolean {
        const search = this.whiteList.find(item => url.search(item) > -1);

        return search !== undefined;
        // return url.search('auth') > -1
    }
}