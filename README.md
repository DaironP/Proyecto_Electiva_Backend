# Proyecto - Centro de adiestramiento canino (Backend)

**By:** **`Dairon Pinto - Felipe Dueñas`**

El presente proyecto consiste en una Api la cual apoya al correcto desarrollo de un aplicativo web para un centro de
adiestramiento canino. En general, el aplicativo presenta una página de visitantes en la cual los usuarios pueden
enterarse de los servicios que se ofrecen en dicho establecimiento. Por otro lado, la aplicación proporciona un sistema
de registro y autenticación en el cual los visitantes pueden hacer uso de este para ingresar al sistema y, de este modo,
registrar a sus mascotas con el fin de realizar inscripciones a sesiones o clases de diversos tipos de adiestramiento.
Cabe mencionar que previamente, el aplicativo tiene registrado a 2 entrenadores cuya función es crear y gestionar las
sesiones o clases de adiestramiento.

## Funcionalidades

El aplicativo web cuenta con las siguientes funcionalidades:

- `Página principal`: Los visitantes pueden conocer los servicios ofrecidos por el centro de adiestramiento canino.
- `Registro`: Los clientes pueden registrarse proporcionando su nombre, apellido, identificación, correo y contraseña.
- `Autenticación`: Los clientes pueden iniciar sesión con su correo electrónico y contraseña.
- `Registro de mascotas`: Los clientes pueden registrar a sus mascotas proporcionando su género, nombre, raza y edad.
- `Inscripción a clases de adiestramiento`: Los clientes pueden inscribir a sus mascotas en clases de adiestramiento.
- `Creación de sesiones de adiestramiento`: Los entrenadores pueden crear sesiones de adiestramiento y de igual forma
  realizar algunos procesos de gestión.

## Credenciales

A continuación, se presenta unas "cuentas" de usuario para realizar pruebas.

### Clientes

`email`: felipeduenas0@gmail.com

`password`: 123456789

### Entrenadores

`email`: tony.stark@gmail.com

`password`: 123456789

## Lenguaje de desarrollo

Este proyecto fue desarrollado en `Node.js`, junto con el framework `Express`. Node.js es un entorno de tiempo de
ejecución de JavaScript que permite la creación de aplicaciones web en el lado del servidor. Por otro lado, Express es
un framework web para Node.js que facilita la creación de aplicaciones web robustas y escalables. La combinación de
estas tecnologías se traduce en una herramienta poderosa para el desarrollo de aplicaciones web modernas y eficientes.

## Tecnologías utilizadas

Este proyecto se ha desarrollado utilizando las siguientes tecnologías:

- `Node.js`: Una plataforma de desarrollo de aplicaciones que utiliza JavaScript como lenguaje de programación.
- `Express`: Un marco de aplicación web para Node.js.
- `dotenv`: Una biblioteca para cargar variables de entorno desde un archivo .env.
- `Cors`: Biblioteca para permitir el acceso a recursos de una aplicación desde orígenes diferentes al dominio de la
  aplicación.
- `Mongoose`: Biblioteca de modelado de objetos de MongoDB para Node.js.
- `bcryptjs`: Una biblioteca para encriptar contraseñas.
- `passport`: Un middleware de autenticación para Node.js.
- `passport-local`: Una estrategia de autenticación para passport.
- `Jsonwebtoken`: Biblioteca para crear y verificar tokens de autenticación de acuerdo a JSON en aplicaciones de
  Node.js.
- `express-validator`: Una biblioteca para validar entradas en Express.

## Requisitos

Para ejecutar este proyecto es necesario tener instalado:

- Node.js: v18.12.1
- express: ^4.18.1
- dotenv: ^16.0.1
- cors: ^2.8.5
- mongoose: ^7.0.0
- bcryptjs: ^2.4.3
- passport: ^0.6.0
- passport-local: ^1.0.0
- jsonwebtoken: ^9.0.0
- express-validator: ^6.14.3

## Ejecución

Para instalar y configurar el aplicativo web, siga los siguientes pasos:

- Clone este repositorio en su equipo.

```sh
git clone https://github.com/DaironP/Proyecto_Electiva_Backend.git
```

- Ejecute el comando npm install para instalar las dependencias del proyecto.

```sh
npm install
```

- Ejecute el comando node server.js para iniciar el servidor.

```sh
node server.js
```

Una vez realizado estos pasos el proyecto estará disponible en el puerto 3000 (http://localhost:3000) por defecto.

## Propósito educativo

Este proyecto fue diseñado con fines educativos, con el objetivo de aprender y desarrollar habilidades en el desarrollo
de aplicaciones web utilizando Node.js, Express y otras tecnologías mencionadas anteriormente.

---