import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address, Client } from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  // URL base de la API para gestionar clientes
  private apiUrl = 'http://localhost:5170/api/clients';

  // Constructor del servicio que inyecta el cliente HTTP de Angular
  constructor(private http: HttpClient) { }

  // Método para obtener la lista de clientes desde la API
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  // Método para obtener un cliente específico por su ID desde la API
  getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${id}`);
  }

  // Método para agregar un nuevo cliente a la API
  addClient(newClient: Client): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, newClient);
  }

  // Método para agregar una nueva dirección a un cliente existente en la API
  addAddress(clientId: number, newAddress: Address): Observable<Client> {
    return this.http.post<Client>(`${this.apiUrl}/${clientId}/add-address`, newAddress);
  }
}
