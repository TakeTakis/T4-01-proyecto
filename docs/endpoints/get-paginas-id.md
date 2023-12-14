# Endpoint: `GET /paginas/{id}`

Permite obtener información detallada sobre una pagina en específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del pagina que se desea recuperar.

## Ejemplo de Solicitud
```json
GET http://localhost:3100/paginas/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_pagina": 1,
    "fecha":"2020-12-12",
    "fk_id_diario":1,
    "mensaje":"hola1"
}
```

## Respuestas de Errores Posibles
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

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre una pagina en específico, de lo contrareo lanzara un error postman