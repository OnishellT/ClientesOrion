// Importa módulos y componentes necesarios desde Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Importa los componentes de la aplicación
import { AppComponent } from './app.component';
import { ClientListComponent } from './client-list/client-list.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';

// Decorador NgModule que define el módulo principal de la aplicación
@NgModule({
  // Lista de componentes declarados en este módulo
  declarations: [
    AppComponent,
    ClientListComponent,
    AddClientComponent,
    ClientDetailsComponent
  ],

  // Lista de módulos de Angular que se utilizan en este módulo
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    // Configuración de las rutas de la aplicación utilizando el módulo RouterModule
    RouterModule.forRoot([
      { path: '', component: ClientListComponent },
      { path: 'add-client', component: AddClientComponent },
      { path: 'client/:id', component: ClientDetailsComponent }
    ])
  ],

  // Lista de servicios proporcionados por este módulo (en este caso, ninguno)
  providers: [],

  // Componente principal que se iniciará al cargar la aplicación
  bootstrap: [AppComponent]
})
export class AppModule { }
