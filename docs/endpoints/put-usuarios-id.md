# Endpoint: `PUT /usuarios/{id}`

Permite borrar un registro y reemplazarlo por otro en la tabla de usuarios mediante un identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la usuario que se desea reemplazar.

## Ejemplo de Solicitud
```json
PUT http://localhost:3100/usuarios/4
{
    "id_usuario": 4,
    "nombre": "Jimmy con PUT",
    "apellidos": "Neutron con PUT",
    "fk_id_zona": 4
}
```

## Respuesta Exitosa (Código 200 OK)
```json
  {
    "status": 200,
    "message": "Usuario Actulizacion hecha con PUT"
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
    "error_description": "No se encontró el usuario."
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

- Si la id_usuario se encuentra referenciada dentro de otra tabla
- Si no le pones algun parametro al URL
- Si un parametro al URL inexistente
- Si el campo no permite nulls y no le das ese campo en el cuerpo de la peticion
- Si el fk_id_zona referenciado no existe en la tabla