# Endpoint: `GET /variables/{id}`

Permite obtener información detallada sobre un variable específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del variable que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /variables/123
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_variable": 123,
  "nombre": "Programación",
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el variable."
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
  sobre un variable en específico.
- Para consultar más detalle sobre los libros relacionados con el variable consultar
  la documentación del endpoint [`/variables/{id}/libros`](./get-variables-id-libros.md).