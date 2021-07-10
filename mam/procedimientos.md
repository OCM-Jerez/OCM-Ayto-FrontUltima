Abrir nueva terminal en /pages
ng g c new --skip-tests
en /domain
copiar y pegar y renombrar con el nombre que estamos añadiendo.
Cambiar nombre en export
NO TENGO CLARO PARA QUE SIVEN ESTOS FICHEROS.
Copiar scss.
Abrir nueva terminal en /services
ng g s new --skip-tests 

en app-routing.module.ts
añadir ruta
en app.menu
añadir routerLink
En app.module.ts    providers: [
    añadir el service nuevo

En .html
    Copiar todo de page anterior
    Linea 26 cambiar titulo.com
    Comprobar nombres de campos BBDD, usando createDTO en el back.

En .ts
    Copiar todo del modelo debajo codigo actual..
    Cambiar 
      @Component({
         selector: 'app-barrio',
         templateUrl: './barrio.component.html',
         styleUrls: ['./barrio.component.scss'],
    Cambian nombre component.

En service.    
    Sustituir todo.
    Cambiar nombre component.
    Cambiar ruta API


Se pueden gerar datos con DSchema para probar.