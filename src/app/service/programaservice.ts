import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IPrograma, ISavePrograma } from '../domain/programa';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProgramaService {
    codPro: string;
    desPro: string

    constructor(private httpClient: HttpClient) { }
    private URL_API = environment.host + '/programas';

    postPrograma(programa: ISavePrograma): Observable<IPrograma[]> {
        return this.httpClient.post<IPrograma[]>(this.URL_API, programa)
    }

    getProgramas() {
        return this.httpClient.get<IPrograma[]>(this.URL_API)
    }

    updatePrograma(id: number, programa: IPrograma): Observable<IPrograma[]> {
        const url = this.URL_API + '/' + id
        return this.httpClient.put<IPrograma[]>(url, programa)
    }

    deletePrograma(id: number): Observable<IPrograma[]> {
        const url = this.URL_API + '/' + id
        return this.httpClient.delete<IPrograma[]>(url)
    }

}
