# Documentación de la API RESTful

Bienvenido a la documentación de la API. A continuación, se presenta una lista
de endpoints disponibles con enlaces a sus respectivas documentaciones detalladas.

## Descripción General de Endpoints

| Recurso GET                   | Descripción |
| -------------------------- | ----------- |
| [`GET /zonas`](./endpoints//get-zonas.md)               | Muestra la lista de todas las zonas disponibles. |
| [`GET /diarios`](./endpoints//get-diarios.md)               | Muestra la lista de todos los diarios disponibles. |
| [`GET /trabajadores`](./endpoints//get-trabajadores.md)               | Muestra la lista de todos los trabajadores disponibles. |
| [`GET /usuarios`](./endpoints//get-usuarios.md)               | Muestra la lista de todos los usuarios disponibles. |
| [`GET /paginas`](./endpoints//get-paginas.md)               | Muestra la lista de todos los paginas disponibles. |


| Recurso GET/{id}                   | Descripción |
| -------------------------- | ----------- |
| [`GET /zonas/{id}`](./endpoints//get-zonas-id.md)          | Muestra información sobre un zona específico por id. |
| [`GET /diarios/{id}`](./endpoints//get-diarios-id.md)          | Muestra información sobre un diario específico por id. |
| [`GET /trabajadores/{id}`](./endpoints//get-trabajadores-id.md)          | Muestra información sobre un trabajador específico por id. |
| [`GET /usuarios/{id}`](./endpoints//get-usuarios-id.md)          | Muestra información sobre un usuario específico por id. |
| [`GET /paginas/{id}`](./endpoints//get-paginas-id.md)          | Muestra información sobre una pagina específico por id. |


| Recurso POST                   | Descripción |
| -------------------------- | ----------- |
| [`POST /zonas`](./endpoints//post-zonas.md)               | Añade un nuevo registro a la tabla zonas . |
| [`POST /diarios`](./endpoints//post-diarios.md)               | Añade un nuevo registro a la tabla diarios . |
| [`POST /trabajadores`](./endpoints//post-trabajadores.md)               | Añadeun nuevo registro a la tabla trabajadores . |
| [`POST /usuarios`](./endpoints//post-usuarios.md)               | Añadeun nuevo registro a la tabla usuarios . |
| [`POST /paginas`](./endpoints//post-paginas.md)               | Añade un nuevo registro a la tabla paginas . |


| Recurso PUT/{id}                   | Descripción |
| -------------------------- | ----------- |
| [`PUT /zonas/{id}`](./endpoints//put-zonas-id.md)          | Permite borrar y volver a poner un registro dentro de la tabla zona por por un id dado. |
| [`PUT /diarios/{id}`](./endpoints//put-diarios-id.md)          | Permite borrar y volver a poner un registro dentro de la tabla diario por por un id dado. |
| [`PUT /trabajadores/{id}`](./endpoints//put-trabajadores-id.md)          | Permite borrar y volver a poner un registro dentro de la tabla trabajador por por un id dado. |
| [`PUT /usuarios/{id}`](./endpoints//put-usuarios-id.md)          | Permite borrar y volver a poner un registro dentro de la tabla usuario por por un id dado. |
| [`PUT /paginas/{id}`](./endpoints//put-paginas-id.md)          | Permite borrar y volver a poner un registro dentro de la tabla  pagina por por un id dado. |


| Recurso PATCH/{id}                   | Descripción |
| -------------------------- | ----------- |
| [`PATCH /zonas/{id}`](./endpoints//patch-zonas-id.md)          | Permite actulizar parcialmente un registro dentro de la tabla zona sin necesidad de borrarlo . |
| [`PATCH /diarios/{id}`](./endpoints//patch-diarios-id.md)          | Permite actulizar parcialmente un registro dentro de la tabla diario sin necesidad de borrarlo . |
| [`PATCH /trabajadores/{id}`](./endpoints//patch-trabajadores-id.md)          | Permite actulizar parcialmente un registro dentro de la tabla trabajador sin necesidad de borrarlo . |
| [`PATCH /usuarios/{id}`](./endpoints//patch-usuarios-id.md)          | Permite actulizar parcialmente un registro dentro de la tabla usuario sin necesidad de borrarlo . |
| [`PATCH /paginas/{id}`](./endpoints//patch-paginas-id.md)          | Permite actulizar parcialmente un registro dentro de la tabla  pagina sin necesidad de borrarlo . |