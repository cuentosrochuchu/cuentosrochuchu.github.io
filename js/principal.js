/* Rochuchu · JavaScript pequeño y opcional.
   Sin él la web funciona entera; solo añade el menú del móvil
   y los filtros de la estantería. */
(function () {
  "use strict";

  // Menú del móvil
  var boton = document.querySelector(".menu-boton");
  var menu = document.getElementById("menu");
  if (boton && menu) {
    boton.addEventListener("click", function () {
      var abierto = boton.getAttribute("aria-expanded") === "true";
      boton.setAttribute("aria-expanded", String(!abierto));
      menu.classList.toggle("abierto", !abierto);
    });
    // Al elegir una opción, el menú se cierra
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        boton.setAttribute("aria-expanded", "false");
        menu.classList.remove("abierto");
      }
    });
  }

  // Filtros de la estantería
  var filtros = document.querySelector(".filtros");
  var libros = document.querySelectorAll(".estanteria-filtrable .libro");
  var recuento = document.querySelector(".recuento");
  if (!filtros || !libros.length) return;

  var en = document.documentElement.lang === "en";
  filtros.hidden = false;

  filtros.addEventListener("click", function (e) {
    var b = e.target.closest(".filtro");
    if (!b) return;
    var filtro = b.getAttribute("data-filtro");

    filtros.querySelectorAll(".filtro").forEach(function (x) {
      x.setAttribute("aria-pressed", String(x === b));
    });

    var visibles = 0;
    libros.forEach(function (libro) {
      var etiquetas = (libro.getAttribute("data-etiquetas") || "").split(" ");
      var ver = filtro === "todos" || etiquetas.indexOf(filtro) !== -1;
      libro.hidden = !ver;
      if (ver) visibles++;
    });

    if (recuento) {
      recuento.textContent = en
        ? (visibles === 1 ? "Showing 1 book" : "Showing " + visibles + " books")
        : (visibles === 1 ? "Se muestra 1 libro" : "Se muestran " + visibles + " libros");
    }
  });
})();
