import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { of, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../src/environments/environment';

import { IUser } from '../src/app/domain/user';
import { AuthResponse } from './auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _usuario!: IUser;

  get usuario() {
    return { ...this._usuario };
  }

  constructor(private http: HttpClient) { }

  registro(user: IUser) {
    const url = `${environment.host}/user/register`;
    const body = {
      // "firstName": user.firstName,
      // "email": user.email,
      login: user.login,
      password: user.password,
      // "lastName": user.lastName,
      // "activated": user.activated,
      // "langKey": user.langKey
    };
    console.log(body);
    // Si el nombre existe devuelve true, si no existe lo graba y devuelve false.
    return this.http.post<boolean>(url, body)
  }

  // Esta function se repite en auth-jwt.service.ts
  login(username: string, password: string) {
    const url = `${environment.host}/authenticate`;
    const body = { username, password };

    // return this.http.post<AuthResponse>(url, body)
    //   .pipe(
    //     tap(resp => {
    //       localStorage.setItem('token', resp.id_token!);
    //     }),
    //     map(resp => true),
    //     catchError(err => of(err.error.message))
    //   );

    return this.http.post<any>(url, body)
      .pipe(
        map(resp => {
          return (resp)
            ? { loginExiste: true }
            : null
        })
      );

  }



  validarToken(): Observable<boolean> {
    const url = `${environment.host}/account`;
    // El interceptor añade el headers.
    // const headers = new HttpHeaders()
    //   .set('Authorization', 'Bearer ' + localStorage.getItem('token') || '');
    // return this.http.get<IUser>(url, { headers })
    return this.http.get<IUser>(url)
      .pipe(
        map((resp: IUser) => {
          // console.log(resp);
          //localStorage.setItem('token', resp.token!);
          this._usuario = {
            id: resp.id,
            login: resp.login,
            firstName: resp.firstName!,
            lastName: resp.lastName,
            email: resp.email,
            activated: resp.activated,
            langKey: resp.langKey,
            authorities: resp.authorities,
            createdBy: resp.createdBy,
            createdDate: resp.createdDate,
            lastModifiedBy: resp.lastModifiedBy,
            lastModifiedDate: resp.lastModifiedDate,
            password: resp.password
          }
          return true;
        }),
        catchError(err => of(false))
      );
  }

  logout() {
    localStorage.clear();
  }

}
