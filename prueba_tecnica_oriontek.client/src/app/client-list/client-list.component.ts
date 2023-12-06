// Importaciones de módulos y clases necesarios de Angular
import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

// Decorador @Component para configurar metadatos del componente
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  // Arreglo que contendrá la lista de clientes
  clients: Client[] = [];

  // Constructor del componente, inyectando instancias de ClientService y Router
  constructor(private clientService: ClientService, private router: Router) { }

  // Método del ciclo de vida OnInit, se ejecuta al iniciar el componente
  ngOnInit(): void {
    // Lógica para cargar la lista de clientes, probablemente desde el servicio.
    // Se suscribe al observable devuelto por el método getClients del servicio
    this.clientService.getClients().subscribe(clients => {
      // Asigna la lista de clientes obtenida al arreglo local
      this.clients = clients;
    });
  }

  // Método para redirigir a la vista de detalles de un cliente específico
  viewDetails(ClientId: Number) {
    // Navega a la ruta correspondiente con el ID del cliente como parámetro
    this.router.navigate([`client/${ClientId}`]);
  }
}
