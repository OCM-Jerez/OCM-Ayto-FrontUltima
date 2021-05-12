import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Programa } from '../domain/programa';

@Injectable()
export class ProgramaService {
    codPro:string;
    desPro:string

    constructor(private http: HttpClient) { }

    getProductsSmall() {
        return this.http.get<any>('assets/demo/data/products-small.json')
        .toPromise()
        .then(res => res.data as Programa[])
        .then(data => data);
    }

    getProducts() {
        return this.http.get<any>('assets/demo/data/products.json')
        // tpPromise esta deprecado.
        //https://indepth.dev/posts/1287/rxjs-heads-up-topromise-is-being-deprecated
        .toPromise()
        .then(res => res.data as Programa[])
        .then(data => data);
    }

    // async getProgramas() {
    //     return await this.http.get<Programa[]>('http://localhost:3000/api/v1/programas')
    // tpPromise esta deprecado.
        //https://indepth.dev/posts/1287/rxjs-heads-up-topromise-is-being-deprecated
    //     .toPromise()
    //     .then(res => res as Programa[])
    //     // algo ha cambiado, ahora no devuelve nada en res.data
    //     // .then(res => res.data as Programa[])
    //     // .then(data => data);
    // }

    getProgramas() {
        return this.http.get<Programa[]>('http://localhost:3000/api/v1/programas')
           }

    getProductsMixed() {
        return this.http.get<any>('assets/demo/data/products-mixed.json')
        .toPromise()
        .then(res => res.data as Programa[])
        .then(data => data);
    }

    getProductsWithOrdersSmall() {
        return this.http.get<any>('assets/demo/data/products-orders-small.json')
        .toPromise()
        .then(res => res.data as Programa[])
        .then(data => data);
    }



}
