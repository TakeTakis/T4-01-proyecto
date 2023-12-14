# Endpoint: `GET /trabajadores/{id}`

Permite obtener información detallada sobre una trabajador en específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del trabajador que se desea recuperar.

## Ejemplo de Solicitud
```json
GET http://localhost:3100/trabajadores/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_trabajador": 1,
    "nombre":"Juan",
    "puesto":"psicologo",
    "numero":123,
    "fk_id_zona":1
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró la trabajador."
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
  sobre una trabajador en específico, de lo contrareo lanzara un error postman