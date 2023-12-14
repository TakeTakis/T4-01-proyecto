# SYNC con Node.js

Sync es un proyecto que buscar ser una aplicacion para el atendimiento de las emociones humanas
con la ayuda de un diario de emociones. Para ello se encontraran los usuarios, las zonas donde reciden, 
los diarios, las paginas y los trabajadores los cuales son profesionales de la salud mental

Se utilizara Node.js y Docker para su demostracion

## Tabla de contenido

- [SYNC con Node.js](#sync-con-nodejs)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Requisitos de instalación](#requisitos-de-instalación)
  - [Instrucciones para la instalación](#instrucciones-para-la-instalación)
  - [Documentación detallada](#documentación-detallada)
  - [Enlaces externos](#enlaces-externos)

## Requisitos de instalación

Asegúrate de tener instalado y configurado Docker antes de comenzar.

- [Docker](https://www.docker.com)

## Instrucciones para la instalación

1. Clonar el repositorio en la máquina local:
   
   ```sh
   git clone https://github.com/TakeTakis/T4-01-proyecto
   ```

2. Navegar al directorio del proyecto:
   
   ```sh
   cd NODE-RESTFUL-MASTER
   ```

3. Ejecutar el siguiente comando para iniciar los contenedores:

    ```sh
    docker-compose up -d
    ```

    > **IMPORTANTE**
    >
    > Debe estar iniciado el Docker engine para ejecutar el comando anterior,
    > si no lo está, se devolverá un mensaje de error indicando que no se
    > encontró el docker daemon.

4. La API estará disponible en `http://localhost:3100`.

## Documentación detallada

Para obtener información detallada sobre los endpoints y cómo utilizar la API,
consulta la [documentación detallada](./docs/README.md).

## Enlaces externos

- [Node.js](https://www.nodejs.org)
- [Docker](https://www.docker.com)