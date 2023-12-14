# Endpoint: `GET /Trabajadores`

Permite obtener información sobre todas las trabajadores dentro de la tabla de trabajadores
Los trabajadores se refieren a los expertos de la salud mental como pueden ser psicologos y terapuetas
La llave foranea "fk_id_zona" nos dice a que zona de colima se encuentra, esto para mostrar las mejores recomendaciones mas cercanas a los usuarios


## Parámetros de URL
- ninguno

## Ejemplo de Solicitud
```json
GET http://localhost:3100/trabajadores
```

## Respuesta Exitosa (Código 200 OK)
```json
[
  {
    "id_trabajador": 1,
    "nombre":"Juan",
    "puesto":"psicologo",
    "numero":123,
    "fk_id_zona":1
  },
   {
    "id_trabajador": 2,
    "nombre":"Francisco",
    "puesto":"Terepeuta",
    "numero":123,
    "fk_id_zona":2
  },
  {
    "id_trabajador": 3,
    "nombre":"Sorjuana",
    "puesto":"psicologo",
    "numero":123,
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

- Si no se encutran trabajadores en la tabla de la base de datos nos dice que no hay nada para mostrar
- Si le pones algun parametro de URL, te lanzara el error dentro de postman