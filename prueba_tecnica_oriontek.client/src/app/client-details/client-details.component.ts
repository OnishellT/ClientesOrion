// Importaciones necesarias desde Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../client.model';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

// Decorador que define el componente
@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  // Propiedades del componente
  clientId!: number;
  client: Client = { id: 0, name: '', addresses: [] };
  newAddress: any = {};  // Puedes ajustar según tu modelo de dirección

  // Constructor que inyecta servicios necesarios
  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private router: Router
  ) { }

  // Método del ciclo de vida del componente que se ejecuta al inicializarse
  ngOnInit(): void {
    // Suscripción a los cambios en los parámetros de la URL
    this.route.paramMap.subscribe(params => {
      // Verificar si params es nulo antes de intentar acceder a sus propiedades
      if (params.has('id')) {
        this.clientId = +params.get('id')!;
        this.loadClientDetails();
      }
    });
  }

  // Método para cargar los detalles del cliente
  loadClientDetails(): void {
    this.clientService.getClientById(this.clientId).subscribe(client => {
      // Asignar las direcciones y desactivar el modo de edición
      this.client = client;
      this.client.addresses.forEach(address => address.editMode = false);
    });
  }

  // Método para agregar una nueva dirección al cliente
  addAddress(): void {
    this.clientService.addAddress(this.clientId, this.newAddress).subscribe(() => {
      // Limpiar el formulario después de agregar la dirección
      this.newAddress = {};
      // Recargar los detalles del cliente
      this.loadClientDetails();
    });
  }

  // Función para activar/desactivar el modo de edición de una dirección
  toggleEditMode(address: any): void {
    address.editMode = !address.editMode;
  }

  // Función para guardar la dirección actualizada
  saveAddress(clientId: number, address: any): void {
    this.clientService.updateAddress(clientId, address.id, address).subscribe(() => {
      // Desactivar el modo de edición y recargar los detalles del cliente
      address.editMode = false;
      this.loadClientDetails();
    });
  }

  // Método para navegar a la página de inicio
  goToHome(): void {
    this.router.navigate(['/']);
  }
}
