console.log("%cEjercicio 4 - Flota de Vehículos", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// Clase base: representa cualquier vehículo de la flota
class Vehiculo {
  constructor(marca, modelo, año, velocidadMaxima) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.velocidadMaxima = velocidadMaxima;
  }

  // Imprime la información básica del vehículo
  describirse() {
    console.log(
      `Vehículo: ${this.marca} ${this.modelo} | año: ${this.año} | velocidad máxima: ${this.velocidadMaxima} km/h`
    );
  }

  // Calcula cuántos años tiene el vehículo según el año actual
  calcularAntiguedad() {
    return new Date().getFullYear() - this.año;
  }
}

// Subclase: Auto hereda de Vehiculo
class Auto extends Vehiculo {
  constructor(marca, modelo, año, velocidadMaxima, numeroPuertas, tipoCombustible) {
    super(marca, modelo, año, velocidadMaxima);
    this.numeroPuertas = numeroPuertas;
    this.tipoCombustible = tipoCombustible;
  }

  // Sobrescribe describirse() para incluir datos propios del auto
  describirse() {
    super.describirse();
    console.log(`Auto | puertas: ${this.numeroPuertas} | combustible: ${this.tipoCombustible}`);
  }
}

// Subclase: Moto hereda de Vehiculo
class Moto extends Vehiculo {
  constructor(marca, modelo, año, velocidadMaxima, tieneCarrito) {
    super(marca, modelo, año, velocidadMaxima);
    this.tieneCarrito = tieneCarrito;
  }

  // Sobrescribe describirse() para indicar si tiene carrito lateral
  describirse() {
    super.describirse();
    console.log(`Moto | carrito lateral: ${this.tieneCarrito ? 'sí' : 'no'}`);
  }
}

// Subclase: Camion hereda de Vehiculo
class Camion extends Vehiculo {
  constructor(marca, modelo, año, velocidadMaxima, capacidadToneladasMaxima) {
    super(marca, modelo, año, velocidadMaxima);
    this.capacidadToneladasMaxima = capacidadToneladasMaxima;
  }

  // Sobrescribe describirse() para mostrar la capacidad de carga
  describirse() {
    super.describirse();
    console.log(`Camión | capacidad máxima: ${this.capacidadToneladasMaxima} toneladas`);
  }
}

// Se crea una flota mezclando autos, motos y camiones
const flota = [
  new Auto('Toyota', 'Corolla', 2018, 180, 4, 'gasolina'),
  new Moto('Honda', 'CB 500', 2021, 170, false),
  new Camion('Volvo', 'FH', 2015, 140, 18),
  new Auto('Mazda', 'CX-5', 2020, 190, 5, 'diésel'),
  new Moto('Yamaha', 'MT-07', 2019, 200, false),
  new Camion('Mercedes-Benz', 'Atego', 2012, 130, 12)
];

// 1) Imprimir la descripción de cada vehículo
console.log('--- 1) Descripción de toda la flota ---');
flota.forEach(vehiculo => {
  vehiculo.describirse();
  console.log('---');
});

// 2) Filtrar e imprimir solo las motos
console.log('--- 2) Solo motos ---');
const motos = flota.filter(vehiculo => vehiculo instanceof Moto);
motos.forEach(moto => moto.describirse());

// 3) Calcular la velocidad máxima promedio de toda la flota
console.log('--- 3) Velocidad máxima promedio ---');
const promedioVelocidad =
  flota.reduce((acum, vehiculo) => acum + vehiculo.velocidadMaxima, 0) / flota.length;
console.log(`Velocidad máxima promedio: ${promedioVelocidad.toFixed(2)} km/h`);

// 4) Encontrar el vehículo más antiguo
console.log('--- 4) Vehículo más antiguo ---');
const masAntiguo = flota.reduce((antiguo, actual) =>
  actual.calcularAntiguedad() > antiguo.calcularAntiguedad() ? actual : antiguo
);
console.log(`El vehículo más antiguo es: ${masAntiguo.marca} ${masAntiguo.modelo} (${masAntiguo.año})`);