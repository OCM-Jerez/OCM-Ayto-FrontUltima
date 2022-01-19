import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { SESSION_STORAGE_ENUM } from '../utils/storage.enum';
import { SessionStorageService } from './storage/storage.service';
import { IResponseLogin } from '../../app/domain/user';
import jwtDecode, { JwtPayload } from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class JwtValidService {
    constructor(
        private _sessionStorageService: SessionStorageService,
        private _router: Router
    ) { }


    getToken(): string | null {
        if (this.isExpired()) {
            return null;
        }
        return this._sessionStorageService.getItem<IResponseLogin>(SESSION_STORAGE_ENUM.USER_DATA).token;
    }

    isExpired(): boolean {
        try {
            const tokenUser = this._sessionStorageService.getItem<IResponseLogin>(SESSION_STORAGE_ENUM.USER_DATA);
            if (!tokenUser) { return true }

            const value = jwtDecode<JwtPayload>(tokenUser.token);
            const tokenExpired = Date.now() > value.exp * 1000;

            return tokenExpired;

        } catch (error) {
            console.error('Error al validar el Token ', error);
            return true
        }
    }

    clearToken(): void {
        this._sessionStorageService.clear();
        this._router.navigateByUrl('/auth/login')
    }
}