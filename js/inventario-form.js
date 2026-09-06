// Lógica del formulario de equipos (inventario-form.html)

// Datos estáticos de ejemplo, usados solo para precargar el formulario en modo edición.
const EQUIPOS_DEMO = [
  {
    imei: "356789012345678",
    modelo: "iPhone 13 Pro",
    capacidad: "256GB",
    color: "Grafito",
    bateria: 92,
    precioCompra: 520,
    precioVenta: 650,
    estado: "Disponible",
  },
  {
    imei: "356789012345679",
    modelo: "iPhone 12",
    capacidad: "128GB",
    color: "Azul",
    bateria: 84,
    precioCompra: 340,
    precioVenta: 420,
    estado: "Disponible",
  },
  {
    imei: "356789012345680",
    modelo: "iPhone 11",
    capacidad: "64GB",
    color: "Blanco",
    bateria: 78,
    precioCompra: 250,
    precioVenta: 310,
    estado: "En Reparación",
  },
  {
    imei: "356789012345681",
    modelo: "iPhone 13 Mini",
    capacidad: "128GB",
    color: "Rosa",
    bateria: 95,
    precioCompra: 400,
    precioVenta: 480,
    estado: "Disponible",
  },
];

function precargarFormulario(id) {
  const equipo = EQUIPOS_DEMO.find(function (item) {
    return item.imei === id;
  });

  if (!equipo) {
    return;
  }

  document.getElementById("form-title").textContent = "Editar Equipo";
  document.getElementById("imei").value = equipo.imei;
  document.getElementById("modelo").value = equipo.modelo;
  document.getElementById("capacidad").value = equipo.capacidad;
  document.getElementById("color").value = equipo.color;
  document.getElementById("bateria").value = equipo.bateria;
  document.getElementById("estado").value = equipo.estado;
  document.getElementById("precio-compra").value = equipo.precioCompra;
  document.getElementById("precio-venta").value = equipo.precioVenta;
}

const idParam = new URLSearchParams(window.location.search).get("id");

if (idParam) {
  precargarFormulario(idParam);
}

document.getElementById("equipo-form").addEventListener("submit", function (event) {
  event.preventDefault();
  window.location.href = "inventario.html";
});

document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "index.html";
});
