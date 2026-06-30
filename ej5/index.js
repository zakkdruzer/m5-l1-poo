console.log("%cEjercicio 5 - Figuras Geométricas Polimórficas", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// Clase base para cualquier figura geométrica
class Figura {
  constructor(color) {
    this.color = color;
  }

  // Método base: se deja vacío para que cada subclase defina su propia lógica
  area() {
    console.warn('area() debe implementarse en cada figura');
    return 0;
  }

  // Método común que usa el área de cada subclase
  describir() {
    console.log(`${this.constructor.name} | color: ${this.color} | área: ${this.area().toFixed(2)}`);
  }
}

// Triángulo con base y altura
class Triangulo extends Figura {
  constructor(color, base, altura) {
    super(color);
    this.base = base;
    this.altura = altura;
  }

  area() {
    return (this.base * this.altura) / 2;
  }
}

// Rectángulo con ancho y alto
class Rectangulo extends Figura {
  constructor(color, ancho, alto) {
    super(color);
    this.ancho = ancho;
    this.alto = alto;
  }

  area() {
    return this.ancho * this.alto;
  }
}

// Círculo con radio
class Circulo extends Figura {
  constructor(color, radio) {
    super(color);
    this.radio = radio;
  }

  area() {
    return Math.PI * this.radio ** 2;
  }
}

// Canvas con figuras mezcladas
const canvas = [
  new Triangulo('rojo', 10, 6),
  new Rectangulo('azul', 8, 5),
  new Circulo('verde', 4),
  new Triangulo('amarillo', 12, 7),
  new Rectangulo('morado', 3, 9),
  new Circulo('naranja', 2.5)
];

console.log('--- Figuras del canvas ---');
canvas.forEach(figura => figura.describir());

console.log('--- Área total ---');
const areaTotal = canvas.reduce((acum, figura) => acum + figura.area(), 0);
console.log(`Área total del canvas: ${areaTotal.toFixed(2)}`);