import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Barrio } from "../domain/barrio";

@Injectable()
export class BarrioService {
  codEco: string;
  desEco: string

  constructor(private httpClient: HttpClient) { }

  getBarrio() {
    return this.httpClient.get<Barrio[]>('http://localhost:3000/api/v1/barrios')
      .pipe(
        catchError(this.handleError),
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError('ups algo salio mal');
  }

}
