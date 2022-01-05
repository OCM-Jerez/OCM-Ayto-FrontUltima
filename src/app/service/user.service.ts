import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IregisterUser } from '../domain/user';
import { environment } from 'src/environments/environment';

@Injectable(
    {
        providedIn: 'root',
    }
)
export class UserService {
    constructor(private httpClient: HttpClient) { }
    private URL_API = environment.host + '/user';

    postUser(user: IregisterUser): Observable<IregisterUser> {
        console.log("postUser", [user]);
        try {
            return this.httpClient.post<IregisterUser>(this.URL_API, user)
        } catch (error) {
            console.log(error);
        }
    }

    getUsers() {
        return this.httpClient.get<IregisterUser[]>(this.URL_API)
    }

    updateUser(id: number, user: IregisterUser): Observable<IregisterUser[]> {
        const url = this.URL_API + '/' + id
        return this.httpClient.put<IregisterUser[]>(url, user)
    }

    deleteUser(id: number): Observable<IregisterUser[]> {
        const url = this.URL_API + '/' + id
        return this.httpClient.delete<IregisterUser[]>(url)
    }

    loginExist(user: IregisterUser): Observable<boolean> {
        const url = this.URL_API + '/registerLogin';
        // console.log(url);
        return this.httpClient.post<boolean>(url, user)
    }


    // loginExist(login: string): Observable<boolean[]> {
    //     const url = this.URL_API + '/registerLogin';
    //     console.log(url);
    //     return this.httpClient.post<boolean[]>(url, login)
    // }


}
