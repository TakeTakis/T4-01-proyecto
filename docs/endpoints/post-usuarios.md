# Endpoint: `POST /Usuarios`

Permite añadir un nuevo registro dentro de la tabla de usuarios


## Parámetros de URL
- Los datos que llevara el nuevo registro 
 
En el apartado de Postman tenemos que ir a Body, seleccionar raw, y poner el tipo de archivo JSON

## Ejemplo de Solicitud
```json
POST http://localhost:3100/usuarios

  {
    "id_usuario": 4,
    "nombre": "Jimmy",
    "apellidos": "Neutron",
    "fk_id_zona": 4
  }
```
## Respueta Exitosa (Código 200 OK)
```json
  {
    "status": 201,
    "message": "Usuario creada con POST"
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

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 

## Notas Adicionales

Lanzara un error en los siguientes casos
- Si la id_usuario a insertar ya se encuentra dentro de la tabla
- Si le pones algun parametro al URL
- Si el campo no permite nulls y no le das ese campo en el cuerpo de la peticion
- Si el fk_id_zona esta asosiado a una zona que no existe