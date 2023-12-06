// Importar los espacios de nombres necesarios
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

// Definir el controlador, que hereda de ControllerBase y está marcado como ApiController
[ApiController]
[Route("api/clients")]
public class ClientsController : ControllerBase
{
    // Lista estática que simula el almacenamiento de clientes con datos de ejemplo
    private static List<Client> _clients = new List<Client>
    {
        new Client
        {
            Id = 1,
            Name = "Cliente de prueba",
            Addresses = new List<Address>
            {
                new Address { Id = 1, Street = "Calle 1", City = "Ciudad 1" },
                new Address { Id = 2, Street = "Calle 2", City = "Ciudad 2" }
            }
        },
        // Puedes agregar más clientes según sea necesario
    };

    // Método HTTP GET para obtener todos los clientes
    [HttpGet]
    public ActionResult<IEnumerable<Client>> GetClients()
    {
        // Devuelve una respuesta HTTP 200 OK con la lista de clientes
        return Ok(_clients);
    }

    // Método HTTP GET para obtener un cliente por su ID
    [HttpGet("{id}")]
    public ActionResult<Client> GetClientById(int id)
    {
        // Busca el cliente en la lista según su ID
        var client = _clients.FirstOrDefault(c => c.Id == id);

        // Si no se encuentra el cliente, devuelve una respuesta HTTP 404 Not Found
        if (client == null)
            return NotFound();

        // Devuelve una respuesta HTTP 200 OK con el cliente encontrado
        return Ok(client);
    }

    // Método HTTP POST para agregar un nuevo cliente
    [HttpPost]
    public ActionResult<Client> AddClient(Client newClient)
    {
        // Asigna un nuevo ID al cliente y lo agrega a la lista
        newClient.Id = _clients.Count + 1;
        _clients.Add(newClient);

        // Devuelve una respuesta HTTP 201 Created con el nuevo cliente y su ubicación
        return CreatedAtAction(nameof(GetClientById), new { id = newClient.Id }, newClient);
    }

    // Método HTTP POST para agregar una nueva dirección a un cliente existente
    [HttpPost("{clientId}/add-address")]
    public ActionResult<Client> AddAddress(int clientId, Address newAddress)
    {
        // Busca el cliente en la lista según su ID
        var client = _clients.FirstOrDefault(c => c.Id == clientId);

        // Si no se encuentra el cliente, devuelve una respuesta HTTP 404 Not Found
        if (client == null)
            return NotFound();

        // Asigna un nuevo ID a la dirección y la agrega a la lista de direcciones del cliente
        newAddress.Id = client.Addresses.Count + 1;
        client.Addresses.Add(newAddress);

        // Devuelve una respuesta HTTP 200 OK con el cliente actualizado
        return Ok(client);
    }

    // Método HTTP PUT para actualizar una dirección de un cliente existente
    [HttpPut("{clientId}/update-address/{addressId}")]
    public ActionResult<Client> UpdateAddress(int clientId, int addressId, [FromBody] Address updatedAddress)
    {
        // Busca el cliente en la lista según su ID
        var client = _clients.FirstOrDefault(c => c.Id == clientId);

        // Si no se encuentra el cliente, devuelve una respuesta HTTP 404 Not Found
        if (client == null)
            return NotFound();

        // Busca la dirección en la lista de direcciones del cliente según su ID
        var addressToUpdate = client.Addresses.FirstOrDefault(a => a.Id == addressId);

        // Si no se encuentra la dirección, devuelve una respuesta HTTP 404 Not Found
        if (addressToUpdate == null)
            return NotFound();

        // Actualiza los campos de la dirección con los valores proporcionados
        addressToUpdate.Street = updatedAddress.Street;
        addressToUpdate.City = updatedAddress.City;
        // Puedes agregar más campos según sea necesario

        // Devuelve una respuesta HTTP 200 OK con el cliente actualizado
        return Ok(client);
    }
}
