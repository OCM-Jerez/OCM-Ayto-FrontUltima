import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { OrganoContratacion } from "../domain/organo-contratacion";

@Injectable()
export class OrganoContratacionService {
  codEco: string;
  desEco: string

  constructor(private httpClient: HttpClient) { }

  getOrganoContratacion() {
    return this.httpClient.get<OrganoContratacion[]>('http://localhost:3000/api/v1/organoContratacion')
      .pipe(
        catchError(this.handleError),
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError('ups algo salio mal');
  }

}
