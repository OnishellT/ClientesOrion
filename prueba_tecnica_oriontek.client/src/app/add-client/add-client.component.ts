// src/app/add-client/add-client.component.ts
import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  // Nuevo cliente que se va a agregar, inicializado con valores por defecto
  newClient: Client = { id: 0, name: '', addresses: [{ id: 0, street: '', city: '' }] };

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void { }

  // Método para agregar un nuevo cliente
  addClient(): void {
    // Extraer solo la información necesaria del nuevo cliente (nombre, id y direcciones)
    const { name } = this.newClient;
    const { id } = this.newClient;
    const { addresses } = this.newClient;
    const clientInfo = { id, name, addresses };

    // Enviar la información del cliente a la API mediante el servicio de clientes
    this.clientService.addClient(clientInfo).subscribe((addedClient: Client) => {
      // Agregar las direcciones al cliente recién agregado
      addedClient.addresses = [...this.newClient.addresses];
      // Limpiar el formulario después de agregar el cliente
      this.newClient = { id: 0, name: '', addresses: [{ id: 0, street: '', city: '' }] };
      // Recargar la lista de clientes
      this.clientService.getClients().subscribe(clients => {
        // Actualizar la lista de clientes
      });
    });
  }

  // Método para agregar una nueva dirección al cliente
  addAddress(): void {
    this.newClient.addresses.push({ id: 0, street: '', city: '' });
  }

  // Método para navegar de regreso a la página principal
  goToHome(): void {
    this.router.navigate(['/']);
  }
}
