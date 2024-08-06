import { agregarAlCarrito } from "./carrito.js";
let id_productos = 1;
const d = document;

class Producto {
  constructor(nombre, precio, categoria = "") {
    let tipos_categoria = [
      "Rolex",
      "Swatches",
      "Casio",
      "Omega",
    ];

    this.nombre = nombre;
    this.categoria = tipos_categoria[categoria];
    this.precio = precio;
    this.id = id_productos++;
    this.img = `./img/${nombre.toLowerCase()}.png`;
    this.stock = rand_int(0, 30);
  }
}

let productos = [
  new Producto("Rolex Hulk", 29190000, 2),
  new Producto("Rolex Datejust 36", 20641000, 2),
  new Producto("Rolex Explorer", 17375000, 2),
  new Producto("Rolex Sky Dweller", 27939000, 0),
  new Producto("Rolex Deepsea", 37419000, 0),
  new Producto("Rolex Cosmograph Daytona", 204960000, 0),
  
];


function rand_int(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function renderProductos() {
  const container_cards = d.querySelector("#container");
  container_cards.innerHTML = ""; 

  productos.forEach((producto) => {
    let copia_plantilla = d.querySelector("template").content.cloneNode(true);

    copia_plantilla.querySelector("h5").textContent = producto.nombre;
    copia_plantilla.querySelector(
      ".card-categoria"
    ).textContent = `Categoría: ${producto.categoria}`;
    copia_plantilla.querySelector(
      ".card-price"
    ).textContent = `Precio: $${producto.precio}`;
    copia_plantilla.querySelector(
      ".card-id"
    ).textContent = `Id: ${producto.id}`;
    copia_plantilla.querySelector(
      ".card-stock"
    ).textContent = `Stock: ${producto.stock}`;
    copia_plantilla.querySelector("img").setAttribute("src", producto.img);
    copia_plantilla.querySelector("img").setAttribute("alt", producto.nombre);

    const btnAgregar = copia_plantilla.querySelector("button");
    btnAgregar.addEventListener("click", () => {
      if (producto.stock > 0) {
        agregarAlCarrito(producto);
        renderProductos(); 
      }
    });
    if (producto.stock === 0) {
      copia_plantilla.querySelector(".card").style.opacity = "0.5"; 
      btnAgregar.disabled = true;
    }

    container_cards.append(copia_plantilla);
  });
}

export { productos, renderProductos };