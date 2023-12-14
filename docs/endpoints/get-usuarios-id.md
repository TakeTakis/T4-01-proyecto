# Endpoint: `GET /usuarios/{id}`

Permite obtener información detallada sobre un usuario en específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del usuario que se desea recuperar.

## Ejemplo de Solicitud
```json
GET http://localhost:3100/usuarios/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_usuario": 1,
    "nombre":"Juan",
    "apellidos":"perez",
    "fk_id_zona":1
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró al usuario."
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
  sobre un usuario en específico, de lo contrareo lanzara un error postman