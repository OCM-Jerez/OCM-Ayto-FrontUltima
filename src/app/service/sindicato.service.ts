import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Sindicato } from "../domain/sindicato";



@Injectable({ providedIn: 'root' })
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
