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

function buscarEdad() {
  const buscarEdadInput = document.getElementById('buscarEdad');
  const edadABuscar = parseInt(buscarEdadInput.value);

  if (!isNaN(edadABuscar)) {
    const indice = edades.indexOf(edadABuscar);
    const resultadoBusqueda = document.getElementById('resultadoBusqueda');
    if (indice !== -1) {
      resultadoBusqueda.textContent = `La edad ${edadABuscar} se encuentra en el índice ${indice}`;
    } else {
      resultadoBusqueda.textContent = `La edad ${edadABuscar} no se encuentra en la lista`;
    }
  } else {
    alert('Por favor, ingresa una edad válida para buscar.');
  }
}

function filtrarEdades() {
  const edadesAFiltrarInput = document.getElementById('edadesAFiltrar');
  const edadesAFiltrarTexto = edadesAFiltrarInput.value;

  // Convertir el texto de edades separadas por comas a un array de números
  const edadesAFiltrar = edadesAFiltrarTexto
    .split(',')
    .map(edad => parseInt(edad.trim()))
    .filter(edad => !isNaN(edad));

  // Filtrar edades mayores a los valores proporcionados
  const edadesFiltradas = edades.filter(edad => edadesAFiltrar.includes(edad));

  // Actualizar el contenido del elemento 'edadesFiltradas' en el HTML
  const edadesFiltradasElement = document.getElementById('edadesFiltradas');
  edadesFiltradasElement.textContent = edadesFiltradas.join(', '); // Mostrar las edades separadas por comas
}





