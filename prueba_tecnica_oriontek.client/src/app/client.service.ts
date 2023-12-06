import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address, Client } from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:5170/api/clients';

  // Constructor que inyecta el servicio HttpClient
  constructor(private http: HttpClient) { }

  // Método para obtener la lista de clientes
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  // Método para obtener un cliente por su ID
  getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${id}`);
  }

  // Método para agregar un nuevo cliente
  addClient(newClient: Client): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, newClient);
  }

  // Método para agregar una dirección a un cliente específico
  addAddress(clientId: number, newAddress: Address): Observable<Client> {
    return this.http.post<Client>(`${this.apiUrl}/${clientId}/add-address`, newAddress);
  }

  // Nuevo método para actualizar una dirección existente
  updateAddress(clientId: number, addressId: number, updatedAddress: any): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/${clientId}/update-address/${addressId}`, updatedAddress);
  }
}
