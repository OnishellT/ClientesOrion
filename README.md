# Prueba Técnica Oriontek ⭐

Este proyecto es una prueba técnica diseñada para evaluar las habilidades y conocimientos de los candidatos para el rol de Arquitecto de Software en Oriontek.

## Configuración

Asegúrese de configurar las opciones de depuración en Visual Studio 2022 para evitar errores relacionados con el navegador.

Este proyecto fue creado en Visual Studio 2022. Para ejecutarlo, descárguelo e impórtelo en Visual Studio 2022.

El backend es una API RESTful creada con ASP.NET Core 8. Cada archivo en este repositorio está comentado con la documentación correspondiente.

El frontend está construido en Angular 16. Se utilizó Font Awesome a través de CDN para el icono de Home.

## Requisitos

Para ejecutar este proyecto, asegúrese de tener instalados los siguientes requisitos:

- [Node.js LTS](https://nodejs.org/)
- [Visual Studio 2022](https://visualstudio.microsoft.com/)
- CLI de Angular (instálelo a través de npm: `npm install -g @angular/cli`)

## Estructura del Proyecto (Front-end) Angular 16

```plaintext
├─ package-lock.json
├─ package.json
├─ prueba_tecnica_oriontek.client.esproj
├─ prueba_tecnica_oriontek.client.esproj.user
├─ README.md
├─ src
│  ├─ app
│  │  ├─ add-client
│  │  │  ├─ add-client.component.css
│  │  │  ├─ add-client.component.html
│  │  │  └─ add-client.component.ts
│  │  ├─ app-routing.module.ts
│  │  ├─ app.component.css
│  │  ├─ app.component.html
│  │  ├─ app.component.ts
│  │  ├─ app.module.ts
│  │  ├─ app.service.ts
│  │  ├─ client-details
│  │  │  ├─ client-details.component.css
│  │  │  ├─ client-details.component.html
│  │  │  └─ client-details.component.ts
│  │  ├─ client-list
│  │  │  ├─ client-list.component.css
│  │  │  ├─ client-list.component.html
│  │  │  └─ client-list.component.ts
│  │  ├─ client.model.ts
│  │  └─ client.service.ts
│  ├─ assets
│  │  └─ .gitkeep
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ main.ts
│  ├─ proxy.conf.js
│  └─ styles.css
├─ tsconfig.app.json
├─ tsconfig.json
└─ tsconfig.spec.json
```

## Estructura del Proyecto (Back-end) ASP.NET Core 8

```plaintext
prueba_tecnica_oriontek.Server
├─ appsettings.Development.json
├─ appsettings.json
├─ bin
├─ Client.cs
├─ Controllers
│  └─ ClientsController.cs
├─ obj
│  ├─ project.assets.json
│  ├─ project.nuget.cache
│  ├─ prueba_tecnica_oriontek.Server.csproj.nuget.dgspec.json
│  ├─ prueba_tecnica_oriontek.Server.csproj.nuget.g.props
│  └─ prueba_tecnica_oriontek.Server.csproj.nuget.g.targets
├─ Program.cs
├─ Properties
│  └─ launchSettings.json
├─ prueba_tecnica_oriontek.Server.csproj
└─ prueba_tecnica_oriontek.Server.http
```

## Instrucciones de Ejecución

1. **Backend (ASP.NET Core):**
   - Asegúrese de tener configurado el entorno de desarrollo adecuado mediante `appsettings.Development.json`.
   - Ejecute el proyecto desde Visual Studio.

2. **Frontend (Angular):**
   - Navegue hasta el directorio del proyecto Angular (`src`) mediante la terminal.
   - Ejecute `npm install` para instalar las dependencias.
   - Ejecute `ng serve` para iniciar el servidor de desarrollo de Angular.

Acceda a la aplicación desde su navegador utilizando la URL proporcionada por el servidor de desarrollo de Angular.

¡Disfrute explorando la prueba técnica Oriontek!
