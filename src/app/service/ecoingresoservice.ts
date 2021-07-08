import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { EcoIngreso } from "../domain/eco-ingreso";

@Injectable()
export class EcoIngresoService {
    codEco: string;
    desEco: string

    constructor(private httpClient: HttpClient) { }

    getEcoIngreso() {
        return this.httpClient.get<EcoIngreso[]>('http://localhost:3000/api/v1/eco-ingresos')
            .pipe(
                catchError(this.handleError),
            );
    }

    private handleError(error: HttpErrorResponse) {
        console.log(error.message);
        return throwError('ups algo salio mal');
    }

}
