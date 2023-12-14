# Endpoint: `POST /Paginas`

Permite añadir un nuevo registro dentro de la tabla de paginas


## Parámetros de URL
- Los datos que llevara el nuevo registro 
 
En el apartado de Postman tenemos que ir a Body, seleccionar raw, y poner el tipo de archivo JSON

## Ejemplo de Solicitud
```json
POST http://localhost:3100/paginas

  {
    "id_pagina": 4,
    "fecha":"2020-12-12",
    "fk_id_diario":4,
    "Mensaje":"Holi4"
  }
```
## Respueta Exitosa (Código 200 OK)
```json
  {
    "status": 201,
    "message": "Pagina creada con POST"
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
- Si la id_pagina a insertar ya se encuentra dentro de la tabla
- Si le pones algun parametro al URL
- Si el campo no permite nulls y no le das ese campo en el cuerpo de la peticion
- Si el fk_id_diario esta asosiado a un usuario que no existe