import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IPrograma, ISavePrograma } from '../domain/programa';
import { environment } from 'src/environments/environment';
import { IErrorResponse } from '../../common/models/http-api.interface';

@Injectable()
export class ProgramaService {
    codPro: string;
    desPro: string

    constructor(private httpClient: HttpClient) { }

    // https://platzi.com/clases/1731-angular-profesional/23607-manejo-de-errores/
    // https://www.udemy.com/course/rxjs-de-cero-hasta-los-detalles/learn/lecture/16623364#questions/14456716
    // https://www.youtube.com/watch?v=J2tN5zG0k18&t=780s
    private URL_API = environment.host + '/programas';

    postPrograma(programa: ISavePrograma): Observable<IPrograma[]> {
        const url = this.URL_API + '/'
        return this.httpClient.post<IPrograma[]>(url, programa)
    }

    getProgramas() {
        return this.httpClient.get<IPrograma[]>(this.URL_API)
    }

    updatePrograma(id: number, programa: IPrograma): Observable<IPrograma[] | IErrorResponse> {
        const url = this.URL_API + '/' + id
        return this.httpClient.put<IPrograma[] | IErrorResponse>(url, programa)

    }

    deletePrograma(id: number) {
        const url = this.URL_API + '/' + id
        return this.httpClient.delete(url)
    }

    // private handleError(error: HttpErrorResponse) {
    //     const errorController = error.error as IErrorResponse;
    //     if (errorController) {
    //         console.log(errorController.errorResponse.message);

    //     }

    //     return throwError('ups algo salio mal');
    // }

}
