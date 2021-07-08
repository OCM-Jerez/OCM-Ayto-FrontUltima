import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Programa } from '../domain/programa';

@Injectable()
export class EcoGastoService {
    codEco: string;
    desEco: string

    constructor(private httpClient: HttpClient) { }

    getEcoGasto() {
        return this.httpClient.get<Programa[]>('http://localhost:3000/api/v1/economicos')

            .pipe(
                catchError(this.handleError),
            );
    }

    private handleError(error: HttpErrorResponse) {
        console.log(error.message);
        return throwError('ups algo salio mal');
    }

}

