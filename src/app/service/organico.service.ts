import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Organico } from '../domain/organico';

@Injectable({ providedIn: 'root' })
export class OrganicoService {
    codPro: string;
    desPro: string

    constructor(private httpClient: HttpClient) { }

    getOrganicos() {
        return this.httpClient.get<Organico[]>('http://localhost:3000/api/v1/organicos')
            .pipe(
                catchError(this.handleError),
            );
    }

    private handleError(error: HttpErrorResponse) {
        console.log(error.message);
        return throwError('ups algo salio mal');
    }

}
