// https://www.youtube.com/watch?v=ZIsneoFCZo8

import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IErrorResponse } from '../models/http-api.interface';

@Injectable()
export class AnimeInterceptor implements HttpInterceptor {
	constructor(private messageService: MessageService) { }

	intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		// const token = localStorage.getItem('acces_token')!;
		let requestClone = req;

		// if (!this.isLogin(req.url)) {
		// 	requestClone = req.clone({
		// 		headers: req.headers.set('Authorization', `Bearer ${token}`)
		// 	});
		// }

		return next.handle(requestClone).pipe(catchError((error) => this.herrorHandler(error)));
	}

	private isLogin(url: string): boolean {
		return true // borrar al descomentar linea inferior.
		// return url.search(PathRest.GET_LOGIN) != -1;
	}

	private herrorHandler(error: HttpErrorResponse): Observable<never> {

		if (error instanceof HttpErrorResponse) {
			if (error.error instanceof ErrorEvent) {
				this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message, life: 4000 });
			} else {
				const errorController = error.error as IErrorResponse;

				switch (error.status) {
					case 400: {
						if (errorController) {
							this.messageService.add({ severity: 'error', summary: 'Error', detail: errorController.errorResponse.message[0], life: 4000 });
							console.log();
						} else {
							console.log('Ocurrio un error');
						}
					}
						break;

					default:
						break;
				}


				if (error.status === 401) {
					// this.messageService.showError('Ustede no cuenta con permisos para ingresar', 'top right');
				} else {
					// this.messageService.showError('ERROR DE SERVIDOR', 'top right');
				}
			}
		} else {
			// this.messageService.showError('OTRO TIPO DE ERROR', 'top right');
		}

		this.messageService.add({ severity: 'error', summary: 'Error de conexión', detail: error.message, life: 8000 });
		this.messageService.add({ severity: 'error', summary: 'Error de conexión', detail: 'El back parece estar caido', life: 8000 });

		return throwError(error);
	}
}
