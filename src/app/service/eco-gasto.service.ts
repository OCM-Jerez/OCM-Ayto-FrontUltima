import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Economico } from '../domain/economico';

@Injectable({ providedIn: 'root' })
export class EcoGastoService {
    codEco: string;
    desEco: string

    constructor(private httpClient: HttpClient) { }

    getEcoGasto() {
        return this.httpClient.get<Economico[]>('http://localhost:3000/api/v1/economicos')

            .pipe(
                catchError(this.handleError),
            );
    }

    private handleError(error: HttpErrorResponse) {
        console.log(error.message);
        return throwError('ups algo salio mal');
    }

}

