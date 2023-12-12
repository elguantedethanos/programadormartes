// Array para almacenar las edades ingresadas
const edades = [];

function agregarEdad() {
  const inputEdad = document.getElementById('edad');
  const edad = parseInt(inputEdad.value);

  // Verificar que la entrada sea un número positivo
  if (!isNaN(edad) && edad > 0) {
    edades.push(edad);
    actualizarEdades();
    inputEdad.value = ''; // Limpiar el campo de entrada
    calcularPromedio();
  } else {
    alert('Por favor, ingresa una edad válida.');
  }
}

function actualizarEdades() {
  const edadesIngresadas = document.getElementById('edadesIngresadas');
  edadesIngresadas.innerHTML = '<strong>Edades Ingresadas:</strong> ' + edades.join(', ');
}

function calcularPromedio() {
  const resultado = document.getElementById('resultado');
  if (edades.length > 0) {
    const promedio = edades.reduce((a, b) => a + b) / edades.length;
    resultado.textContent = promedio.toFixed(2); // Mostrar el promedio con dos decimales
  } else {
    resultado.textContent = 'N/A'; // Si no hay edades ingresadas, mostrar "N/A"
  }
}
