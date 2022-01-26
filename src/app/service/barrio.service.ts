import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Barrio } from "../domain/barrio";



@Injectable({ providedIn: 'root' })
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
