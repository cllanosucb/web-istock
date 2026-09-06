// Lógica del formulario de ventas (ventas-form.html)

// Datos estáticos de ejemplo del inventario, usados solo para poblar el select de iPhones.
const EQUIPOS_DEMO = [
  { imei: "356789012345678", modelo: "iPhone 13 Pro", capacidad: "256GB", estado: "Disponible" },
  { imei: "356789012345679", modelo: "iPhone 12", capacidad: "128GB", estado: "Disponible" },
  { imei: "356789012345680", modelo: "iPhone 11", capacidad: "64GB", estado: "Vendido" },
  { imei: "356789012345681", modelo: "iPhone 13 Mini", capacidad: "128GB", estado: "Disponible" },
];

// Datos estáticos de ejemplo de ventas, usados solo para precargar el formulario en modo edición.
const VENTAS_DEMO = [
  {
    id: "V-2026-014",
    imei: "356789012345678",
    fecha: "2026-09-05",
    cliente: "Mariana Rojas",
    precio: 680,
    metodoPago: "Efectivo",
    garantia: "1 mes",
  },
  {
    id: "V-2026-013",
    imei: "356789012345679",
    fecha: "2026-09-04",
    cliente: "Diego Fernández",
    precio: 320,
    metodoPago: "QR",
    garantia: "Sin garantía",
  },
  {
    id: "V-2026-012",
    imei: "356789012345680",
    fecha: "2026-09-03",
    cliente: "Valeria Suárez",
    precio: 290,
    metodoPago: "QR",
    garantia: "3 meses",
  },
];

function poblarSelectIphones(imeiSeleccionado) {
  const select = document.getElementById("iphone");
  select.innerHTML = '<option value="">Seleccionar iPhone</option>';

  EQUIPOS_DEMO.forEach(function (equipo) {
    const esDisponible = equipo.estado === "Disponible";
    const esElSeleccionado = equipo.imei === imeiSeleccionado;

    if (esDisponible || esElSeleccionado) {
      const option = document.createElement("option");
      option.value = equipo.imei;
      option.textContent = equipo.modelo + " " + equipo.capacidad;
      select.appendChild(option);
    }
  });

  if (imeiSeleccionado) {
    select.value = imeiSeleccionado;
  }
}

const idParam = new URLSearchParams(window.location.search).get("id");
const ventaExistente = idParam
  ? VENTAS_DEMO.find(function (venta) {
      return venta.id === idParam;
    })
  : null;

poblarSelectIphones(ventaExistente ? ventaExistente.imei : null);

if (ventaExistente) {
  document.getElementById("form-title").textContent = "Editar Venta";
  document.getElementById("fecha").value = ventaExistente.fecha;
  document.getElementById("cliente").value = ventaExistente.cliente;
  document.getElementById("precio").value = ventaExistente.precio;
  document.getElementById("metodo-pago").value = ventaExistente.metodoPago;
  document.getElementById("garantia").value = ventaExistente.garantia;
}

document.getElementById("venta-form").addEventListener("submit", function (event) {
  event.preventDefault();
  window.location.href = "ventas.html";
});

document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "index.html";
});
