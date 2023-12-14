# Endpoint: `PUT /paginas/{id}`

Permite actualizar parcialmente (un solo dato) dentro de un registro en la tabla de pagina mediante un identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la pagina que se desea actulizar.

## Ejemplo de Solicitud
```json
PUT http://localhost:3100/paginas/1
{
   "fecha":"2020-10-10"
}
```

## Respuesta Exitosa (Código 200 OK)
```json
  {
    "status": 200,
    "message": "Pagina Actualizacion hecha por PATCH"
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
    "error_description": "No se encontró el pagina."
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

- Si no le pones algun parametro al URL
- Si metes un id inexistente en fk_id_pagina o dentro de la URL
- Si el campo no permite nulls y le intentas meter un null en el cuerpo de la peticion