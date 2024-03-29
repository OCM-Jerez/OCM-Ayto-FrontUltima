import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EcoIngreso } from "../domain/eco-ingreso";

@Injectable({ providedIn: 'root' })
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
