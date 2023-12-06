// Interfaz que representa la estructura de una dirección.
export interface Address {
  id: number;        // Identificador único de la dirección.
  street: string;    // Nombre de la calle de la dirección.
  city: string;      // Nombre de la ciudad de la dirección.
  editMode?: boolean; // Opcional: Indica si la dirección está en modo de edición.
}

// Interfaz que representa la estructura de un cliente.
export interface Client {
  id: number;          // Identificador único del cliente.
  name: string;        // Nombre del cliente.
  addresses: Address[]; // Lista de direcciones asociadas al cliente.
}
