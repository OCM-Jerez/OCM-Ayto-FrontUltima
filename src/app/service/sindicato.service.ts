import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Sindicato } from "../domain/sindicato";

@Injectable()
export class SindicatoService {
  codEco: string;
  desEco: string

  constructor(private httpClient: HttpClient) { }

  getSindicato() {
    return this.httpClient.get<Sindicato[]>('http://localhost:3000/api/v1/sindicato')
      .pipe(
        catchError(this.handleError),
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError('ups algo salio mal');
  }

}
