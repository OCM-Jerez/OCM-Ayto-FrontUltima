import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IPrograma, ISavePrograma } from '../domain/programa';
import { environment } from 'src/environments/environment';


@Injectable()
export class ProgramaService {
    codPro: string;
    desPro: string

    constructor(private httpClient: HttpClient) { }

    // https://platzi.com/clases/1731-angular-profesional/23607-manejo-de-errores/
    // https://www.udemy.com/course/rxjs-de-cero-hasta-los-detalles/learn/lecture/16623364#questions/14456716
    // https://www.youtube.com/watch?v=J2tN5zG0k18&t=780s
    private URL_API = environment.host + '/programas';

    postPrograma(programa: IPrograma) {
        const url = this.URL_API + '/'
        return this.httpClient.post(url, programa).pipe(
            catchError(this.handleError),
        )
    }


    getProgramas() {
        return this.httpClient.get<IPrograma[]>(this.URL_API)
            .pipe(
                catchError(this.handleError),
            )
    }

    updatePrograma(id: number, programa: IPrograma) {
        const url = this.URL_API + '/' + id
        return this.httpClient.put(url, programa).pipe(
            catchError(this.handleError),
        )
    }

    deletePrograma(id: number) {
        const url = this.URL_API + '/' + id
        return this.httpClient.delete(url).pipe(
            catchError(this.handleError),
        )
    }


    private handleError(error: HttpErrorResponse) {
        console.log(error.message);
        return throwError('ups algo salio mal');
    }




}
