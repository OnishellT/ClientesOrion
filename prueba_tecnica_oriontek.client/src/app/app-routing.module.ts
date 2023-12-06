// Importa los módulos necesarios de Angular para el enrutamiento.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa los componentes que se utilizarán como vistas en las rutas.
import { ClientListComponent } from './client-list/client-list.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';

// Define las rutas de la aplicación utilizando el objeto Routes.
const routes: Routes = [
  { path: '', component: ClientListComponent }, // Ruta para mostrar la lista de clientes
  { path: 'add-client', component: AddClientComponent }, // Ruta para agregar un nuevo cliente
  { path: 'client/:id', component: ClientDetailsComponent } // Ruta para ver los detalles de un cliente específico
];

// @NgModule es un decorador que se utiliza para configurar un módulo de Angular.
@NgModule({
  // Configura el módulo de enrutamiento con las rutas definidas.
  imports: [RouterModule.forRoot(routes)],
  // Exporta el módulo de enrutamiento para que pueda ser utilizado por otros módulos.
  exports: [RouterModule]
})
// Define la clase del módulo de enrutamiento de la aplicación.
export class AppRoutingModule { }
