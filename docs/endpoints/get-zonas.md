# Endpoint: `GET /Zonas`

Permite obtener información sobre todas las zonas dentro de la tabla de zonas

## Parámetros de URL
- ninguno

## Ejemplo de Solicitud
```json
GET http://localhost:3100/zonas
```

## Respuesta Exitosa (Código 200 OK)
```json
[
  {
    "id_zona": 1,
    "nombre": "Bugambilias"
  },
   {
    "id_zona": 2,
    "nombre": "Zona Centro"
  },
  {
    "id_zona": 3,
    "nombre": "El Moralete"
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

- Si no se encutran zonas en la tabla de la base de datos nos dice que no hay nada para mostrar
- Si le pones algun parametro de URL, te lanzara el error dentro de postman