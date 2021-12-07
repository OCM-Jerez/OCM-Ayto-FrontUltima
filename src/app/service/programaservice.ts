import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IPrograma, ISaveProgram } from '../domain/programa';
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

    getProgramas() {
        return this.httpClient.get<IPrograma[]>(this.URL_API)
            .pipe(
                catchError(this.handleError),
            )

    }

    updateProgramas(id: number, programa: ISaveProgram) {
        const url = this.URL_API + '/' + id

        return this.httpClient.put(url, programa).pipe(
            catchError(this.handleError),
        )

    }
    private handleError(error: HttpErrorResponse) {
        console.log(error.message);
        return throwError('ups algo salio mal');
    }

    // async getProgramas() {
    //     return await this.httpClient.get<Programa[]>('http://localhost:3000/api/v1/programas')
    // tpPromise esta deprecado.
    //https://indepth.dev/posts/1287/rxjs-heads-up-topromise-is-being-deprecated
    //     .toPromise()
    //     .then(res => res as Programa[])
    //     // algo ha cambiado, ahora no devuelve nada en res.data
    //     // .then(res => res.data as Programa[])
    //     // .then(data => data);
    // }



}
