import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Delegacion } from "../domain/delegacion";

@Injectable()
export class DelegacionService {
  codEco: string;
  desEco: string

  constructor(private httpClient: HttpClient) { }

  getDelegacion() {
    return this.httpClient.get<Delegacion[]>('http://localhost:3000/api/v1/delegacion')
      .pipe(
        catchError(this.handleError),
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError('ups algo salio mal');
  }

}
