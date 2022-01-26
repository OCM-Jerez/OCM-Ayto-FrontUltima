import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Distrito } from "../domain/distrito";



@Injectable({ providedIn: 'root' })
export class DistritoService {
  codEco: string;
  desEco: string

  constructor(private httpClient: HttpClient) { }

  getDistrito() {
    return this.httpClient.get<Distrito[]>('http://localhost:3000/api/v1/distrito')
      .pipe(
        catchError(this.handleError),
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError('ups algo salio mal');
  }

}
