// Lógica de la página de confirmación de eliminado (eliminar-dispositivo-inventario.html)

// Datos estáticos de ejemplo, usados solo para mostrar el resumen del equipo a eliminar.
const EQUIPOS_DEMO = [
  {
    imei: "356789012345678",
    modelo: "iPhone 13 Pro",
    capacidad: "256GB",
    color: "Grafito",
    precioBase: 650,
  },
  {
    imei: "356789012345679",
    modelo: "iPhone 12",
    capacidad: "128GB",
    color: "Azul",
    precioBase: 420,
  },
  {
    imei: "356789012345680",
    modelo: "iPhone 11",
    capacidad: "64GB",
    color: "Blanco",
    precioBase: 310,
  },
  {
    imei: "356789012345681",
    modelo: "iPhone 13 Mini",
    capacidad: "128GB",
    color: "Rosa",
    precioBase: 480,
  },
];

function mostrarResumen(id) {
  const equipo = EQUIPOS_DEMO.find(function (item) {
    return item.imei === id;
  });

  if (!equipo) {
    return;
  }

  document.getElementById("summary-modelo").textContent = equipo.modelo;
  document.getElementById("summary-imei").textContent = equipo.imei;
  document.getElementById("summary-detalle").textContent = equipo.capacidad + " · " + equipo.color;
  document.getElementById("summary-precio").textContent = "$" + equipo.precioBase;
}

const idParam = new URLSearchParams(window.location.search).get("id");

if (idParam) {
  mostrarResumen(idParam);
}

document.getElementById("confirm-delete-btn").addEventListener("click", function () {
  window.location.href = "inventario.html";
});

document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "index.html";
});
