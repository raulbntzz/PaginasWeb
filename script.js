// Variables de distintos tipos
let nombreStr = "Juan", numero = 42, activo = true, lista = [1,2,3], obj = {x: 10};
let suma = 10 + 5, logico = (10 > 5) && activo;

// Clase Usuario
class Usuario {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = `${nombre.toLowerCase()}.${apellido.toLowerCase()}@email.com`;
    }
}

// Función para generar usuarios
function generarUsuarios(cantidad) {
    let usuarios = [];
    
    for (let i = 0; i < cantidad; i++) {
        const nombre = `Usuario${i + 1}`;
        const apellido = "";
        const edad = Math.floor(Math.random() * 50) + 18;
        usuarios.push(new Usuario(nombre, apellido, edad));
    }
    return usuarios;
}

// Clasificar edad (if/else)
function clasificarEdad(edad) {
    if (edad < 25) return "Joven";
    else if (edad < 50) return "Adulto";
    else return "Senior";
}

// Generar tarjeta HTML
function crearTarjeta(usuario, index) {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');
    
    tarjeta.innerHTML = `
        <h2>${usuario.nombre}</h2>
        <p><strong>ID:</strong> ${index + 1}</p>
        <p><strong>Edad:</strong> ${usuario.edad} años (${clasificarEdad(usuario.edad)})</p>
        <p><strong>Email:</strong> ${usuario.email}</p>
        <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES')}</p>
    `;
    
    return tarjeta;
}

// Evento principal
document.getElementById('generar-btn').addEventListener('click', function() {
    const cantidad = parseInt(prompt('¿Cuántos usuarios deseas generar?', '5'));
    if (!cantidad || cantidad <= 0) return;
    
    const usuarios = generarUsuarios(cantidad);
    const contenedor = document.getElementById('contenedor-tarjetas');
    contenedor.innerHTML = '';
    
    // ForEach
    usuarios.forEach((usuario, index) => {
        contenedor.appendChild(crearTarjeta(usuario, index));
    });
    
    this.innerHTML = 'Generar más usuarios';
});
