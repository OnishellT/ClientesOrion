// Clase Client
public class Client
{
    // Propiedad que representa el identificador único del cliente
    public int Id { get; set; }

    // Propiedad que representa el nombre del cliente
    public string Name { get; set; }

    // Propiedad que representa la lista de direcciones asociadas al cliente
    public List<Address> Addresses { get; set; }
}

// Clase Address
public class Address
{
    // Propiedad que representa el identificador único de la dirección
    public int Id { get; set; }

    // Propiedad que representa el nombre de la calle de la dirección
    public string Street { get; set; }

    // Propiedad que representa el nombre de la ciudad de la dirección
    public string City { get; set; }
}
