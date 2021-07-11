
TODO EN SINGULAR.
Abrir nueva terminal en /pages
ng g c new --skip-tests
* En /domain
    Copiar modelo
    Renombar fichero copiado.
    Cambiar nombre en export
NO TENGO CLARO PARA QUE SIVEN ESTOS FICHEROS.
Copiar scss.
* Abrir nueva terminal en /services
    ng g s new --skip-tests 
    Copiar todo del modelo.
    Buscar y sustituir an miniscula y MAYUSCULA.
    Cambiar ruta API

* En app-routing.module.ts
    Añadir ruta
* En appn app.menu
    Añadir routerLink
* En app.module.ts    providers: [
    Añadir el service nuevo

* En .html
    Copiar todo de page anterior
    Linea 26 cambiar titulo.com
    Comprobar nombres de campos BBDD, usando createDTO en el back.

* En .ts
    Copiar todo del modelo.
    Buscar y sustituir an miniscula y MAYUSCULA.


Se pueden gerar datos con DSchema para probar. Cambiar a 6 en lugar de qoo que tiene por defecto.