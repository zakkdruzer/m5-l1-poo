console.log("%cEjercicio 2 - Inventario de una Tienda", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

class Producto {
  constructor(nombre, precio, stock, categoria) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.categoria = categoria;
  }

  hayStock() {
    return this.stock > 0;
  }

  aplicarDescuento(porcentaje) {
    if (porcentaje < 0 || porcentaje > 100) {
      console.error(`Porcentaje inválido para ${this.nombre}. Debe estar entre 0 y 100.`);
      return;
    }

    this.precio = this.precio * (1 - porcentaje / 100);
  }

  vender(cantidad) {
    if (cantidad <= 0) {
      console.error('La cantidad a vender debe ser mayor a 0.');
      return;
    }

    if (cantidad > this.stock) {
      console.warn(`No hay suficiente stock de ${this.nombre}. Disponible: ${this.stock}`);
      return;
    }

    this.stock -= cantidad;
    console.log(`Venta realizada: ${this.nombre} x${cantidad}. Stock restante: ${this.stock}`);
  }

  toString() {
    return `${this.nombre} | categoría: ${this.categoria} | precio: $${this.precio.toFixed(2)} | stock: ${this.stock}`;
  }
}

// Inventario real con 5 productos
const inventario = [
  new Producto('Polera básica', 12990, 12, 'ropa'),
  new Producto('Jeans slim fit', 29990, 5, 'ropa'),
  new Producto('Zapatillas urbanas', 45990, 0, 'calzado'),
  new Producto('Chaqueta impermeable', 59990, 3, 'ropa'),
  new Producto('Gorra deportiva', 8990, 20, 'accesorios')
];

console.log('--- Inventario completo ---');
inventario.forEach(producto => console.log(producto.toString()));

// 1) Filtrar solo productos con stock
console.log('--- 1) Productos con stock ---');
const conStock = inventario.filter(producto => producto.hayStock());
conStock.forEach(producto => console.log(producto.toString()));

// 2) Ordenar por precio de menor a mayor
console.log('--- 2) Ordenados por precio ascendente ---');
const ordenadosPorPrecio = [...inventario].sort((a, b) => a.precio - b.precio);
ordenadosPorPrecio.forEach(producto => console.log(producto.toString()));

// 3) Aplicar 20% de descuento a la categoría ropa
console.log('--- 3) Descuento 20% a categoría ropa ---');
inventario
  .filter(producto => producto.categoria === 'ropa')
  .forEach(producto => producto.aplicarDescuento(20));

inventario.forEach(producto => console.log(producto.toString()));

// 4) Precio promedio del inventario
console.log('--- 4) Precio promedio del inventario ---');
const total = inventario.reduce((acum, producto) => acum + producto.precio, 0);
const promedio = total / inventario.length;
console.log(`Precio promedio: $${promedio.toFixed(2)}`);