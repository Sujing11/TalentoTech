# API - E-COMMERCE - NODEJS - EXPRESS - MONGODB

Versión 1.0.0

Descripción

Gemas es una plataforma de comercio electrónico diseñada para la venta de productos naturales. Este proyecto proporciona una interfaz sencilla y efectiva para que los usuarios naveguen, seleccionen y compren productos naturales. El backend está construido con Node.js y Express, y utiliza MongoDB para el almacenamiento de datos.

Características

- Gestión de Productos: Crear, leer, actualizar y eliminar productos desde el backend.
- Rutas API: Rutas bien definidas para manejar productos, ventas y contactos.
- Conexión a Base de Datos: Utiliza MongoDB con Mongoose para manejar la persistencia de datos.
- Configuración y Escalabilidad: Configuración sencilla para añadir nuevas funcionalidades y manejar grandes volúmenes de datos.

## Tecnologías utilizadas:

- Node js
- Express js
- Mongo DB

[<img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original.svg" width="48">](https://nodejs.org/es)
[<img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/express/express-original.svg" width="48">](https://expressjs.com/es/)
[<img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mongodb/mongodb-original-wordmark.svg" width="48">](https://www.mongodb.com/)

## Instalación ⏬

Prerrequisitos

Para poder ejecutarlo en tu ordenador, debes de tener [Nodejs](https://nodejs.org/es) instalado. En el caso que no lo tengas puedes descargarlo desde la web de [Nodejs](https://nodejs.org/es) o recomendado utilizar [nvm](https://github.com/nvm-sh/nvm). Una cuenta de [MongoDB](https://www.mongodb.com/es) o acceso a una instancia de MongoDB en la nube.

Pasos para instalar

1. Clona el repositorio en tu máquina local:

```bash
git clone https://github.com/Sujing11/talentotech.git
```
2. Navega al directorio del proyecto:
```bash
cd talentotech
```
3. Instala las dependencias:
```bash
npm install
```
4. Configura la variable de entorno. Crea un archivo .env en la raíz del proyecto y añade la URL de tu base de datos MongoDB:

- DB_URL=`mongodb://tu_usuario:tu_contraseña@host:puerto/nombre_base_de_datos`

5. Inicia el servidor:
```bash
npm start
```
6. Accede a la aplicación en tu navegador en http://localhost:3000.


## Desarrollo

Para trabajar en el desarrollo del proyecto, puedes utilizar nodemon para reiniciar automáticamente el servidor cuando haya cambios en el código:

```bash
npm start

# ó con nodemon

npm run test
```

## Dependencias utilizadas en el proyecto 📦

- [cors](https://www.npmjs.com/package/cors): 2.8.5
- [dotenv](https://www.npmjs.com/package/dotenv): 16.4.5
- [express](https://www.npmjs.com/package/express): 4.19.2
- [mongoose](https://www.npmjs.com/package/mongoose): 8.5.3
- [nodemon](https://www.npmjs.com/package/nodemo): 3.1.4 --> _( para ejecutar el script `npm run dev` es necesaria tener instalado nodemon de forma global o en el proyecto como DevDependencie)_

## Funcionalidades implementadas 🔧

Para los enpoints puedes utilizar [POSTMAN] o [Thunder Client]

### Productos `/products`

- Listar todos los productos. **GET** `/`
- Listar producto. **GET** `/:id`
- Crear producto. **POST** `/`
- Actualizar producto. **PUT** `/:id`
- Desactivar producto. **DELETE** `/:id`

### Rutas adicionales
- /sales: Rutas relacionadas con la gestión de ventas.
- /contacts: Rutas para manejar los contactos de los usuarios.

## Deploy 🚀

Utilicé [vercel.com](https://vercel.com/) para el despliegue, tiene un plan gratuito y es fácil de asociar con GitHub. La desventaja es que no hay servidores en Sudamérica, lo que puede ralentizar la interacción con la aplicación.

Aquí está la [documentación](https://vercel.com/docs) para poder desplegar una aplicación desde GitHub en [vercel.com](https://vercel.com/docs/deployments/git).

Enlace a la [api](https://talentotech-64pku1h0f-dianas-projects-3e11313d.vercel.app)

## Conclusiones finales 🏁

Este proyecto me permitió adquirir conocimientos y habilidades en el desarrollo de aplicaciones backend con Node.js y MongoDB, así como en el uso del framework Express.js, para crear una API REST.

Este proyecto me permitió aplicar muchos de los conceptos y herramientas aprendidos en el curso de Desarrollo Web Full Stack, y me dejó una base sólida para seguir aprendiendo y mejorando en el futuro.

## Frontend

Aqui esta el [Frontend](https://github.com/Sujing11/web.git)

## Deploy Final

Puedes visitar el sitio web [Productos Gemas](https://progemas.netlify.app)
