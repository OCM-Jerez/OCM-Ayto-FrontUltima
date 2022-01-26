import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SeccionCensal } from "../domain/seccion-censal";

@Injectable({ providedIn: 'root' })
export class SeccionCensalService {
  codEco: string;
  desEco: string

  constructor(private httpClient: HttpClient) { }

  getSeccionCensal() {
    return this.httpClient.get<SeccionCensal[]>('http://localhost:3000/api/v1/seccionCensal')
      .pipe(
        catchError(this.handleError),
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError('ups algo salio mal');
  }

}
