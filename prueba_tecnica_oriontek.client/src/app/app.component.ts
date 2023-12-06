// Importa el decorador 'Component' desde el módulo '@angular/core'
import { Component } from '@angular/core';

// Decorador '@Component' que define metadatos para el componente
@Component({
  // Selector del componente en el HTML
  selector: 'app-root',

  // Plantilla que define la estructura del componente
  template: '<router-outlet></router-outlet>',

  // Rutas de estilo para el componente
  styleUrls: ['./app.component.css']
})

// Clase que representa el componente principal de la aplicación
export class AppComponent { }
