console.log("%cEjercicio 6 - Carrito de Compras Encapsulado", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// Clase Carrito con encapsulamiento real usando campos privados
class Carrito {
  #items = [];
  #descuento = 0;

  // Calcula el total aplicando el descuento actual
  get total() {
    const subtotal = this.#items.reduce((acum, item) => acum + item.precio * item.cantidad, 0);
    return subtotal * (1 - this.#descuento / 100);
  }

  // Retorna cuántos productos distintos hay en el carrito
  get cantidadItems() {
    return this.#items.length;
  }

  // Agrega un producto al carrito o suma cantidad si ya existe
  agregar(nombre, precio, cantidad = 1) {
    if (precio <= 0) {
      console.error('El precio debe ser mayor a 0.');
      return;
    }

    if (cantidad < 1) {
      console.error('La cantidad debe ser al menos 1.');
      return;
    }

    const existente = this.#items.find(item => item.nombre === nombre);

    if (existente) {
      existente.cantidad += cantidad;
      console.log(`Se actualizó ${nombre}. Nueva cantidad: ${existente.cantidad}`);
      return;
    }

    this.#items.push({ nombre, precio, cantidad });
    console.log(`${nombre} fue agregado al carrito.`);
  }

  // Elimina un producto por nombre
  eliminar(nombre) {
    const index = this.#items.findIndex(item => item.nombre === nombre);

    if (index === -1) {
      console.warn(`No existe el producto "${nombre}" en el carrito.`);
      return;
    }

    this.#items.splice(index, 1);
    console.log(`${nombre} fue eliminado del carrito.`);
  }

  // Aplica un cupón según el código ingresado
  aplicarCupon(codigo) {
    if (codigo === 'CLASE2026') {
      this.#descuento = 20;
      console.log('Cupón CLASE2026 aplicado: 20% de descuento.');
      return;
    }

    if (codigo === 'MITAD') {
      this.#descuento = 50;
      console.log('Cupón MITAD aplicado: 50% de descuento.');
      return;
    }

    this.#descuento = 0;
    console.error('Cupón inválido. No se aplicó descuento.');
  }

  // Imprime un resumen completo del carrito
  verResumen() {
    console.log('--- Resumen del carrito ---');

    this.#items.forEach(item => {
      const subtotal = item.precio * item.cantidad;
      console.log(`${item.nombre} | precio: $${item.precio.toFixed(2)} | cantidad: ${item.cantidad} | subtotal: $${subtotal.toFixed(2)}`);
    });

    console.log(`Descuento aplicado: ${this.#descuento}%`);
    console.log(`Cantidad de ítems distintos: ${this.cantidadItems}`);
    console.log(`Total final: $${this.total.toFixed(2)}`);
  }
}

// Pruebas del carrito
const carrito = new Carrito();

console.log("--- 1) Agregar producto ---");
carrito.agregar('Polera', 12990, 2);
carrito.agregar('Jeans', 29990, 1);
carrito.agregar('Zapatillas', 45990, 1);
carrito.agregar('Gorra', 8990, 3);
console.log("");

console.log("--- 2) Aplicar cupón ---");
carrito.aplicarCupon('CLASE2026');
console.log("");

console.log("--- 3) Eliminar producto ---");
carrito.eliminar('Gorra');
console.log("");

console.log("--- 4) Precio negativo ---");
carrito.agregar('Calcetines', -5000, 1);
console.log("");

console.log("--- 5) Imprimir resumén ---");
carrito.verResumen();