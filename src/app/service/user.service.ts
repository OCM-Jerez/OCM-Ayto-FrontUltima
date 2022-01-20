import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IloginUser, IResponseLogin } from '../domain/user';
import { environment } from '../../environments/environment';

@Injectable(
    {
        providedIn: 'root',
    }
)
export class UserService {
    constructor(private httpClient: HttpClient) { }
    private URL_API = environment.host + '/user';

    login(user: IloginUser): Observable<IResponseLogin> {
        const url = environment.host + '/auth' + '/' + user.login + '/' + user.password;
        return this.httpClient.get<IResponseLogin>(url)
    }

    registerUser(user: IloginUser): Observable<IloginUser> {
        const url = environment.host + '/auth' + '/registerLogin';
        return this.httpClient.post<IloginUser>(url, user)
    }

    postUser(user: IloginUser): Observable<IloginUser> {
        console.log("postUser", [user]);
        try {
            return this.httpClient.post<IloginUser>(this.URL_API, user)
        } catch (error) {
            console.log('Error en postUser', error);
        }
    }

    getUsers() {
        return this.httpClient.get<IloginUser[]>(this.URL_API)
    }

    updateUser(id: number, user: IloginUser): Observable<IloginUser[]> {
        const url = this.URL_API + '/' + id
        return this.httpClient.put<IloginUser[]>(url, user)
    }

    deleteUser(id: number): Observable<IloginUser[]> {
        const url = this.URL_API + '/' + id
        return this.httpClient.delete<IloginUser[]>(url)
    }

}
