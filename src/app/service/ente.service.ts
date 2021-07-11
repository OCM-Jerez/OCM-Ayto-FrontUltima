import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Ente } from "../domain/ente";

@Injectable()
export class EnteService {
  codEco: string;
  desEco: string

  constructor(private httpClient: HttpClient) { }

  getEnte() {
    return this.httpClient.get<Ente[]>('http://localhost:3000/api/v1/ente')
      .pipe(
        catchError(this.handleError),
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError('ups algo salio mal');
  }

}
