# Endpoint: `GET /diarios/{id}`

Permite obtener información detallada sobre una diario en específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la diario que se desea recuperar.

## Ejemplo de Solicitud
```json
GET http://localhost:3100/diarios/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_diario": 1,
    "fk_id_usuario": "1"
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el diario."
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
  sobre una diario en específico, de lo contrareo lanzara un error postman