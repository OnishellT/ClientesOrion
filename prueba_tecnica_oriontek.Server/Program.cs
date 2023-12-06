using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

// Crear el constructor de la aplicaci�n web
var builder = WebApplication.CreateBuilder(args);

// Configuraci�n de servicios
builder.Services.AddControllers(); // Agregar servicios para controladores
builder.Services.AddEndpointsApiExplorer(); // Agregar servicios para la API Explorer
builder.Services.AddSwaggerGen(); // Agregar servicios para Swagger (documentaci�n de la API)

// Configuraci�n de CORS (Cross-Origin Resource Sharing)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowOrigin",
        builder => builder.WithOrigins("https://localhost:4200") // Permitir solicitudes desde el origen especificado
                          .AllowAnyHeader() // Permitir cualquier encabezado en la solicitud
                          .AllowAnyMethod()); // Permitir cualquier m�todo de solicitud
});

// Construir la aplicaci�n
var app = builder.Build();

// Verificar si la aplicaci�n se encuentra en modo de desarrollo
if (app.Environment.IsDevelopment())
{
    // Habilitar Swagger y Swagger UI para la documentaci�n en desarrollo
    app.UseSwagger();
    app.UseSwaggerUI();

    // Mostrar una p�gina de error detallada en desarrollo
    app.UseDeveloperExceptionPage();
}

// Configuraci�n de CORS
app.UseCors("AllowOrigin");

// Habilitar la autorizaci�n
app.UseAuthorization();

// Mapear la solicitud a un archivo si no coincide con ninguna ruta existente
app.MapFallbackToFile("/index.html");

// Mapear las rutas de los controladores
app.MapControllers();

// Iniciar la aplicaci�n
app.Run();
