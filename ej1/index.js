class Circulo {
  constructor(radio) {
    this.radio = radio;
  }

  get diametro() {
    return this.radio * 2;
  }

  area() {
    return Math.PI * this.radio ** 2;
  }

  perimetro() {
    return 2 * Math.PI * this.radio;
  }

  toString() {
    return `Círculo(radio=${this.radio}) → área: ${this.area().toFixed(2)} | perímetro: ${this.perimetro().toFixed(2)} | diámetro: ${this.diametro}`;
  }

  static elMasGrande(c1, c2) {
    return c1.area() >= c2.area() ? c1 : c2;
  }
}

const circulos = [
  new Circulo(5),
  new Circulo(3),
  new Circulo(8)
];

circulos.forEach(circulo => console.log(circulo.toString()));

const masGrande = circulos.reduce((mayor, actual) => Circulo.elMasGrande(mayor, actual));
console.log(`El más grande es: Círculo(radio=${masGrande.radio})`);