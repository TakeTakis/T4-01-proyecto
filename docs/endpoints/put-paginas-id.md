# Endpoint: `PUT /paginas/{id}`

Permite borrar un registro y reemplazarlo por otro en la tabla de paginas mediante un identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la pagina que se desea reemplazar.

## Ejemplo de Solicitud
```json
PUT http://localhost:3100/paginas/4
{
    "id_pagina": 4,
    "fecha":"2020-12-12",
    "fk_id_diario":4,
    "Mensaje":"Holi4 con PUT"
}
```

## Respuesta Exitosa (Código 200 OK)
```json
  {
    "status": 200,
    "message": "Pagina Actulizacion hecha con PUT"
  },
```

## Respuestas de Errores Posibles

- Código 400 Bad Request:

  ```json
  {
    "errno": 400,
    "error": "Bad Request",
    "error_description": "Puede ser por repetir llave foranea, no completar los requisitos que se piden o ponerle un ID a la peticion."
  }
  ```

- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró la pagina."
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 

## Notas Adicionales

- Si la id_pagina se encuentra referenciada dentro de otra tabla
- Si no le pones algun parametro al URL
- Si un parametro al URL inexistente
- Si el campo no permite nulls y no le das ese campo en el cuerpo de la peticion
- Si el fk_id_diario esta asosiado a un usuario que no existe