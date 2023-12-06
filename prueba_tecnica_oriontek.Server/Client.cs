// Clase Client
public class Client
{
    // Propiedad que representa el identificador �nico del cliente
    public int Id { get; set; }

    // Propiedad que representa el nombre del cliente
    public string Name { get; set; }

    // Propiedad que representa la lista de direcciones asociadas al cliente
    public List<Address> Addresses { get; set; }
}

// Clase Address
public class Address
{
    // Propiedad que representa el identificador �nico de la direcci�n
    public int Id { get; set; }

    // Propiedad que representa el nombre de la calle de la direcci�n
    public string Street { get; set; }

    // Propiedad que representa el nombre de la ciudad de la direcci�n
    public string City { get; set; }
}
