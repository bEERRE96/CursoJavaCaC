let juegos;

async function cargarDatos() {
  const response = await fetch("../../data/data.json");
  juegos = await response.json();
  mostrarPorPantalla(juegos);
}

cargarDatos();

function mostrarPorPantalla(juegos) {
  const juegosFiltradosPorDescargas = juegos.filter(
    (objeto) => objeto.descargas > 0
  );
  juegosFiltradosPorDescargas.forEach(insertarCard);
}
