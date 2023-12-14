# Endpoint: `GET /Paginas`

Permite obtener información sobre todos los paginas dentro de la tabla de paginas
La llave foranea "fk_id_diario" nos dice a que diario pertenece

## Parámetros de URL
- ninguno

## Ejemplo de Solicitud
```json
GET http://localhost:3100/paginas
```

## Respuesta Exitosa (Código 200 OK)
```json
[
  {
    "id_pagina": 1,
    "fecha":"2020-12-12",
    "fk_id_diario":1,
    "mensaje":"hola1"
  },
   {
    "id_pagina": 2,
    "fecha":"2020-12-12",
    "fk_id_diario":2,
    "mensaje":"hola2"
  },
  {
    "id_pagina": 3,
    "fecha":"2020-12-12",
    "fk_id_diario":3,
    "mensaje":"hola3"
  }
]
```

## Respuestas de Errores Posibles
- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 

## Notas Adicionales

- Si no se encutran paginas en la tabla de la base de datos nos dice que no hay nada para mostrar
- Si le pones algun parametro de URL, te lanzara el error dentro de postman