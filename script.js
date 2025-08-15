// script.js

// Lista de enlaces por cada grupo
const enlacesPorGrupo = {
  PME: [
    { nombre: "Plaza deportes Jardines ", url: "https://www.google.com/maps/place/9%C2%B057'55.4%22N+84%C2%B002'08.7%22W/@9.9654099,-84.0460283,3990m/data=!3m1!1e3!4m4!3m3!8m2!3d9.9653889!4d-84.03575!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D" },
    { nombre: "Facturación", url: "https://facturacion.pme.com" },
    { nombre: "Soporte Técnico", url: "https://soporte.pme.com" }
  ],
  PMG: [
    { nombre: "Gobierno Digital", url: "https://gob.pmga.gov" },
    { nombre: "Trámites Online", url: "https://tramites.pmga.gov" },
    { nombre: "Transparencia", url: "https://transparencia.pmga.gov" }
  ],
  PMSC: [
    { nombre: "Salud Pública", url: "https://salud.gov" },
    { nombre: "Citas Médicas", url: "https://citas.pmsc.org" },
    { nombre: "Vacunación", url: "https://vacunacion.pmsc.org" }
  ],
  PMB24: [
    { nombre: "Banco 24/7", url: "https://b24.pmb.com" },
    { nombre: "App Móvil", url: "https://app.pmb.com" },
    { nombre: "Seguridad", url: "https://seguridad.pmb.com" }
  ],
  PMM: [
    { nombre: "Municipalidad", url: "https://muni.local" },
    { nombre: "Pagos en Línea", url: "https://pagos.muni.local" },
    { nombre: "Denuncias", url: "https://denuncias.muni.local" }
  ],
  PMU: [
    { nombre: "Universidad", url: "https://uni.edu" },
    { nombre: "Campus Virtual", url: "https://campus.uni.edu" },
    { nombre: "Correo Estudiantil", url: "https://mail.uni.edu" }
  ],
  PMP: [
    { nombre: "Portal del Proveedor", url: "https://proveedores.pmp.com" },
    { nombre: "Facturas Pendientes", url: "https://facturas.pmp.com" },
    { nombre: "Contratos", url: "https://contratos.pmp.com" }
  ]
};

let enlacesActuales = []; // Almacena los enlaces del grupo seleccionado

// Referencias a elementos del DOM
const searchInput = document.getElementById("searchInput");
const linksList = document.getElementById("linksList");
const botones = document.querySelectorAll(".buttons button");

// Función para mostrar los enlaces
function mostrarEnlaces(lista) {
  linksList.innerHTML = "";
  if (lista.length === 0) {
    linksList.innerHTML = "<li style='color: #7f8c8d; font-style: italic;'>No hay enlaces disponibles.</li>";
    return;
  }
  lista.forEach(enlace => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = enlace.nombre;
    a.href = enlace.url;
    a.target = "_blank";
    a.rel = "noopener";
    li.appendChild(a);
    linksList.appendChild(li);
  });
}

// Función para filtrar en tiempo real
function filtrarEnlaces() {
  const texto = searchInput.value.toLowerCase();
  const filtrados = enlacesActuales.filter(enlace =>
    enlace.nombre.toLowerCase().includes(texto)
  );
  mostrarEnlaces(filtrados);
}

// Asignar eventos a todos los botones
botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const grupo = boton.id.replace("btn-", ""); // Extrae: PME, PMG, etc.

    // Mostrar barra de búsqueda
    searchInput.classList.remove("hidden");
    searchInput.value = ""; // Limpiar búsqueda

    // Cargar enlaces del grupo seleccionado
    enlacesActuales = enlacesPorGrupo[grupo] || [];
    mostrarEnlaces(enlacesActuales);

    // Activar búsqueda
    searchInput.removeEventListener("input", filtrarEnlaces);
    searchInput.addEventListener("input", filtrarEnlaces);
  });
});
