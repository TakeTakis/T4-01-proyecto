# Endpoint: `GET /Diarios`

Permite obtener información sobre todas las diarios dentro de la tabla de diarios
Las llaves foraneas "fk_id_usuario" nos dice a que usuario estan enlazadas

## Parámetros de URL
- ninguno

## Ejemplo de Solicitud
```json
GET http://localhost:3100/diarios
```

## Respuesta Exitosa (Código 200 OK)
```json
[
  {
    "id_diario": 1,
    "fk_id_usuario": "1"
  },
   {
    "id_diario": 2,
    "fk_id_usuario": "2"
  },
  {
    "id_diario": 3,
    "fk_id_usuario": "3"
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

- Si no se encutran diarios en la tabla de la base de datos nos dice que no hay nada para mostrar
- Si le pones algun parametro de URL, te lanzara el error dentro de postman