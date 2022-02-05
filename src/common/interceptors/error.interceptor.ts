// https://www.youtube.com/watch?v=ZIsneoFCZo8

import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { IErrorResponse } from '../models/http-api.interface';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
	constructor() { }

	intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		// const token = localStorage.getItem('acces_token')!;
		let requestClone = req;

		// if (!this.isLogin(req.url)) {
		// 	requestClone = req.clone({
		// 		headers: req.headers.set('Authorization', `Bearer ${token}`)
		// 	});
		// }

		return next.handle(requestClone).pipe(catchError((error) => this.errorHandler(error)));
	}

	private isLogin(url: string): boolean {
		return true // borrar al descomentar linea inferior.
		// return url.search(PathRest.GET_LOGIN) != -1;
	}

	private errorHandler(error: HttpErrorResponse): Observable<never> {
		// console.log(error);

		if (error instanceof HttpErrorResponse) {
			if (error.error instanceof ErrorEvent) {
				// this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message, life: 4000 });
				Swal.fire('', `Error  ${error.message}`, 'error');
			} else {
				const errorController = error.error as IErrorResponse;
				switch (error.status) {
					case 400: {
						if (errorController) {
							console.warn('Error 400: ', error);
							// this.messageService.add({ severity: 'error', summary: 'Error 400', detail: errorController.errorResponse.message[0], life: 4000 });
							Swal.fire('', `Error 400  ${errorController.errorResponse.message[0]}`, 'error');
						} else {
							console.warn(error);
							// this.messageService.add({ severity: 'error', summary: 'Error 400', detail: error.message, life: 8000 });
							Swal.fire('', `Error 400  ${error.message[0]}`, 'error');
						}
					}
						break;
					case 401: {
						console.warn('Error 401: ', error);
						// this.messageService.add({ severity: 'error', summary: 'Error 401', detail: error.message, life: 8000 });
						Swal.fire('', `Error 401  ${error.message[0]}`, 'error');
						break;
					}
					case 404: {
						// console.warn('Error 404: ', error);
						// this.messageService.add({ severity: 'error', summary: 'Error ruta API', detail: error.message, life: 8000 });
						break;
					}
					case 500: {
						console.warn('Error 500: ', error);
						// this.messageService.add({ severity: 'error', summary: 'La BBDD no esta en funcionamiento, o no existe la tabla que intentas consultar en la BBDD', detail: error.message, life: 8000 });
						Swal.fire('', `La BBDD no esta en funcionamiento, o no existe la tabla que intentas consultar en la BBDD  ${error.message[0]}`, 'error');
						break;
					}
					case 0: {
						console.warn('Error 0: ', error);
						// this.messageService.add({ severity: 'error', summary: 'El back parece estar caido', detail: error.message, life: 8000 });
						Swal.fire('', `El back parece estar caido  ${error.message[0]}`, 'error');
						break;
					}
					default:
						console.warn(error);
						// this.messageService.add({ severity: 'error', summary: 'Error de conexión', detail: error.message, life: 8000 });
						Swal.fire('', `Error de conexion  ${error.message[0]}`, 'error');
						break;
				}

				// if (error.status === 401) {
				// 	console.log(error);
				// 	// this.messageService.showError('Ustede no cuenta con permisos para ingresar', 'top right');
				// } else {
				// 	console.log(error);
				// 	// this.messageService.showError('ERROR DE SERVIDOR', 'top right');
				// }
			}
		} else {
			console.log(error);
			// this.messageService.showError('OTRO TIPO DE ERROR', 'top right');
		}
		return throwError(error);
	}
}
