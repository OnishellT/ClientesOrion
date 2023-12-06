using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

// Crear el constructor de la aplicación web
var builder = WebApplication.CreateBuilder(args);

// Configuración de servicios
builder.Services.AddControllers(); // Agregar servicios para controladores
builder.Services.AddEndpointsApiExplorer(); // Agregar servicios para la API Explorer
builder.Services.AddSwaggerGen(); // Agregar servicios para Swagger (documentación de la API)

// Configuración de CORS (Cross-Origin Resource Sharing)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowOrigin",
        builder => builder.WithOrigins("https://localhost:4200") // Permitir solicitudes desde el origen especificado
                          .AllowAnyHeader() // Permitir cualquier encabezado en la solicitud
                          .AllowAnyMethod()); // Permitir cualquier método de solicitud
});

// Construir la aplicación
var app = builder.Build();

// Verificar si la aplicación se encuentra en modo de desarrollo
if (app.Environment.IsDevelopment())
{
    // Habilitar Swagger y Swagger UI para la documentación en desarrollo
    app.UseSwagger();
    app.UseSwaggerUI();

    // Mostrar una página de error detallada en desarrollo
    app.UseDeveloperExceptionPage();
}

// Configuración de CORS
app.UseCors("AllowOrigin");

// Habilitar la autorización
app.UseAuthorization();

// Mapear la solicitud a un archivo si no coincide con ninguna ruta existente
app.MapFallbackToFile("/index.html");

// Mapear las rutas de los controladores
app.MapControllers();

// Iniciar la aplicación
app.Run();
