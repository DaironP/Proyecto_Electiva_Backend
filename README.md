# Taller EJS (Node - Express - EJS)
**By:** **`Dairon Pinto - Felipe Dueñas`**

El presente proyecto consiste en un aplicativo web para un centro de adiestramiento canino. En general, el aplicativo presenta una página de visitantes en la cual los usuarios pueden enterarse de los servicios que se ofrecen en dicho establecimiento. Por otro lado, la aplicación proporciona un sistema de registro y autenticación en el cual los visitantes pueden hacer uso de este para ingresar al sistema y, de este modo, registrar a sus mascotas con el fin de realizar inscripciones a sesiones o clases de diversos tipos de adiestramiento. Cabe mencionar que previamente, el aplicativo tiene registrado a 2 entrenadores cuya función es crear y gestionar las sesiones o clases de adiestramiento.

## Funcionalidades
El aplicativo web cuenta con las siguientes funcionalidades:

- `Página principal`: Los visitantes pueden conocer los servicios ofrecidos por el centro de adiestramiento canino.
- `Registro`: Los clientes pueden registrarse proporcionando su nombre, apellido, identifiación, correo y contraseña.
- `Autenticación`: Los clientes pueden iniciar sesión con su correo electrónico y contraseña.
- `Registro de mascotas`: Los clientes pueden registrar a sus mascotas proporcionando su género, nombre, raza y edad.
- `Inscripción a clases de adiestramiento`: Los clientes pueden inscribir a sus mascotas en clases de adiestramiento.
- `Creación de sesiones de adiestramiento`: Los entrenadores pueden crear sesiones de adiestramiento y de igual forma realizar algunos procesos de gestión.

## Credenciales
A continuación, se presenta unas "cuentas" de usuario para realizar pruebas.

### Clientes

`email`: felipeduenas0@gmail.com 

`password`: 123456789

### Entrenadores

`email`: tony.start@gmail.com

`password`: 123456789

`email`: bruce.wayne@gmail.com

`password`: 123456789

## Lenguaje de desarrollo
Este proyecto fue desarrollado en `Node.js`, junto con el framework `Express` y el motor de plantillas `EJS`. Node.js es un entorno de tiempo de ejecución de JavaScript que permite la creación de aplicaciones web en el lado del servidor. Por otro lado, Express es un framework web para Node.js que facilita la creación de aplicaciones web robustas y escalables. Finalmente, se hizo uso de EJS, el cual es un motor de plantillas que permite la creación de páginas web dinámicas utilizando JavaScript en el lado del servidor. La combinación de estas tecnologías se traduce en una herramienta poderosa para el desarrollo de aplicaciones web modernas y eficientes.

## Tecnologías utilizadas
Este proyecto se ha desarrollado utilizando las siguientes tecnologías:

- `Node.js`: Una plataforma de desarrollo de aplicaciones que utiliza JavaScript como lenguaje de programación.
- `Express`: Un marco de aplicación web para Node.js.
- `EJS`: Un motor de plantillas que permite generar HTML dinámico.
- `express-ejs-layouts`: Un middleware para usar plantillas EJS con diseños en Express.
- `express-session`: Una biblioteca para manejar sesiones de usuario en Express.
- `express-validator`: Una biblioteca para validar entradas en Express.
- `passport`: Un middleware de autenticación para Node.js.
- `passport-local`: Una estrategia de autenticación para passport.
- `cookie-parser`: Una biblioteca para analizar las cookies HTTP.
- `uuid`: Una biblioteca para generar identificadores únicos.
- `bcryptjs`: Una biblioteca para encriptar contraseñas.
- `connect-flash`: Una biblioteca para mostrar mensajes flash.
- `dotenv`: Una biblioteca para cargar variables de entorno desde un archivo .env.

## Requisitos
Para ejecutar este proyecto es necesario tener instalado:

- Node.js: v18.12.1
- express: ^4.18.1
- ejs: ^3.1.8
- express-ejs-layouts: ^2.5.1"
- express-session: ^1.17.3
- express-validator: ^6.14.3
- passport: ^0.6.0
- passport-local: ^1.0.0
- cookie-parser: ^1.4.6
- uuid: ^9.0.0
- bcryptjs: ^2.4.3
- connect-flash: ^0.1.1
- dotenv: ^16.0.1

## Ejecución

Para instalar y configurar el aplicativo web, siga los siguientes pasos:

- Clone este repositorio en su equipo.
```sh
git clone https://github.com/felipeduenas0/Taller-EJS.git
```

- Ejecute el comando npm install para instalar las dependencias del proyecto.
```sh
npm install
```

- Ejecute el comando node server.js para iniciar el servidor.
```sh
node server.js
```

Una vez realizado estos pasos el proyecto estará disponible en el puerto 3000 (http://localhost:3000) por defecto. Para ejecutar se recomienda No utilizar `nodemon`, ya que este paquete genera conflicto con la persistencia del proyecto.

## Proposito educativo
Este proyecto fue diseñado con fines educativos, con el objetivo de aprender y desarrollar habilidades en el desarrollo de aplicaciones web utilizando Node.js, Express y otras tecnologías mencionadas anteriormente.

---