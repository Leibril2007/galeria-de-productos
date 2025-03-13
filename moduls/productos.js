function crearProducto(img, nombre, precio, descripcion) {
  // Crear el contenedor del producto
  let div = document.createElement('div');
  div.className = "producto";

  // Etiqueta de la imagen
  let imgProducto = document.createElement('img');
  imgProducto.className = "producto-imagen";
  imgProducto.src = img;
  imgProducto.alt = nombre;
  div.appendChild(imgProducto);

  // Etiqueta h2 para el nombre
  let titNombre = document.createElement('h2');
  titNombre.className = "producto-nombre";
  titNombre.innerText = nombre;
  div.appendChild(titNombre);

  // Etiqueta p para el precio
  let precioProducto = document.createElement('p');
  precioProducto.className = "producto-precio";
  precioProducto.innerText = `${precio}`; // Corregido aquí
  div.appendChild(precioProducto);

  // Etiqueta p para la descripción
  let descripcionText = document.createElement('p');
  descripcionText.className = "producto-descripcion";
  descripcionText.innerText = descripcion;
  div.appendChild(descripcionText);

  // Devolver el div con el producto completo
  return div;
}

// Ejemplo de uso:
const productoDiv = crearProducto(
  "https://example.com/imagen.jpg", // URL de la imagen
  "Producto Ejemplo",              // Nombre del producto
  29.99,                           // Precio del producto
  "Este es un producto de ejemplo para mostrar cómo funciona el módulo."  // Descripción
);


export {crearProducto};
