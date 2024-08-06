import searchFilters from "./estilo js/buscador.js";
import { renderProductos } from "./relojes.js";
import { cargarCarrito } from "./carrito.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  searchFilters(".card-filter", ".cards");
  renderProductos();
  cargarCarrito();
});
