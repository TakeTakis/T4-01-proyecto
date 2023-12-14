# Endpoint: `GET /Usuarios`

Permite obtener información sobre todos los usuarios dentro de la tabla de usuarios
La llave foranea "fk_id_zona" nos dice a que zona de colima se encuentra, esto para mostrar las mejores recomendaciones mas cercanas a los usuarios

## Parámetros de URL
- ninguno

## Ejemplo de Solicitud
```json
GET http://localhost:3100/usuarios
```

## Respuesta Exitosa (Código 200 OK)
```json
[
  {
    "id_usuario": 1,
    "nombre":"Juan",
    "apellidos":"perez",
    "fk_id_zona":1
  },
   {
    "id_usuario": 2,
    "nombre":"Roberto",
    "apellidos":"De la Cruz",
    "fk_id_zona":2
  },
  {
    "id_usuario": 3,
    "nombre":"Miguel",
    "apellidos":"Sanchez",
    "fk_id_zona":3
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

- Si no se encutran usuarios en la tabla de la base de datos nos dice que no hay nada para mostrar
- Si le pones algun parametro de URL, te lanzara el error dentro de postman