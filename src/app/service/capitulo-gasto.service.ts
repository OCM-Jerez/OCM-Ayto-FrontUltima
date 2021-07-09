import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { CapituloGasto } from "../domain/capitulo-gasto";

@Injectable()
export class CapituloGastoService {
  codEco: string;
  desEco: string

  constructor(private httpClient: HttpClient) { }

  getCapituloGasto() {
    return this.httpClient.get<CapituloGasto[]>('http://localhost:3000/api/v1/capitulo-gasto')
      .pipe(
        catchError(this.handleError),
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError('ups algo salio mal');
  }

}
