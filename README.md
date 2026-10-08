# Proyecto 16: API de Around the U.S.

## Descripción del proyecto

Este proyecto consiste en desarrollar un servidor backend utilizando Node.js y Express para la aplicación Around the U.S.

El servidor permite consultar información de usuarios y tarjetas mediante una API REST. Los datos se almacenan en archivos JSON y se leen utilizando el módulo `fs` de Node.js.

## Tecnologías utilizadas

- Node.js
- Express.js
- JavaScript
- Nodemon
- ESLint con la configuración Airbnb Base
- Git y GitHub

## Funcionalidades

- `GET /users`: obtiene todos los usuarios.
- `GET /users/:id`: obtiene un usuario específico mediante su identificador.
- `GET /card`: obtiene todas las tarjetas.
- Manejo de errores HTTP 404 y 500.
- Lectura de archivos JSON mediante los módulos `fs` y `path`.

## Instalación y ejecución

Instalar las dependencias:

```bash
npm install
```

Iniciar el servidor:

```bash
npm run start
```

Iniciar el servidor en modo desarrollo:

```bash
npm run dev
```

Comprobar el código con ESLint:

```bash
npm run lint
```

El servidor funciona en `http://localhost:3000`.

## Autora

Digna Gabriela Amaya

## Repositorio

https://github.com/Gabriela-Amaya/web_project_around_express
