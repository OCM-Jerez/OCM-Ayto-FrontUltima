Abrir nueva terminal en /pages
ng g c capitulo-ingresos --skip-tests
en /domain
copiar y pegar y renombrar con el nombre que estamos añadiendo.
Cambiar nombre en export
NO TENGO CLARO PARA QUE SIVEN ESTOS FICHEROS.
Copiar scss.
Abrir nueva terminal en /services
ng g s capitulo-ingresos --skip-tests 

en app-routing.module.ts
añadir ruta
en app.menu
añadir routerLink
En app.module.ts    providers: [
    añadir el service nuevo

En .html
    Linea 26 cambiar titulo.com

En .ts
    Copiar todo del modelo debajo codigo actual..
    Cambiar 
      @Component({
         selector: 'app-barrio',
         templateUrl: './barrio.component.html',
         styleUrls: ['./barrio.component.scss'],
    cambian nombre component.

En service.    
    Sustituir todo.
    Cambiar nombre component.
    Cambiar ruta API


Se pueden gerar datos con DSchema para probar.