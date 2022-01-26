
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CapituloIngreso } from "../domain/capitulo-ingreso";



@Injectable({ providedIn: 'root' })
export class CapituloIngresoService {
  codEco: string;
  desEco: string

  constructor(private httpClient: HttpClient) { }

  getCapituloIngreso() {
    return this.httpClient.get<CapituloIngreso[]>('http://localhost:3000/api/v1/capitulo-ingresos')
      .pipe(
        catchError(this.handleError),
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError('ups algo salio mal');
  }

}
