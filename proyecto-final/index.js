console.log("%cProyecto Final - Sistema de Gestión de una Librería", "font-weight: bold; color: green; font-size: 15px;");
console.log("");

// Clase base: representa cualquier libro de la biblioteca
class Libro {
  constructor(titulo, autor, año, paginas, isbn) {
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
    this.paginas = paginas;
    this.isbn = isbn;
  }

  // Calcula cuántos años han pasado desde su publicación
  get edadEnAnios() {
    return new Date().getFullYear() - this.año;
  }

  // Retorna true si el libro fue publicado antes del 2000
  esAntiguo() {
    return this.año < 2000;
  }

  // Resumen general del libro
  resumen() {
    return `${this.titulo} | autor: ${this.autor} | año: ${this.año} | páginas: ${this.paginas} | ISBN: ${this.isbn}`;
  }
}

// Libro digital: agrega formato y tamaño, además de tiempo estimado de lectura
class LibroDigital extends Libro {
  constructor(titulo, autor, año, paginas, isbn, formatoArchivo, tamañoMB) {
    super(titulo, autor, año, paginas, isbn);
    this.formatoArchivo = formatoArchivo;
    this.tamañoMB = tamañoMB;
  }

  resumen() {
    return `${super.resumen()} | formato: ${this.formatoArchivo} | tamaño: ${this.tamañoMB} MB`;
  }

  tiempoDeLectura(palabrasPorMinuto = 250) {
    const totalPalabras = this.paginas * 300;
    const minutosTotales = totalPalabras / palabrasPorMinuto;
    const horas = Math.floor(minutosTotales / 60);
    const minutos = Math.round(minutosTotales % 60);
    return `${horas}h ${minutos}m aprox.`;
  }
}

// Enciclopedia: agrega volumen y temática
class Enciclopedia extends Libro {
  constructor(titulo, autor, año, paginas, isbn, volumen, tematica) {
    super(titulo, autor, año, paginas, isbn);
    this.volumen = volumen;
    this.tematica = tematica;
  }

  resumen() {
    return `${super.resumen()} | volumen: ${this.volumen} | temática: ${this.tematica}`;
  }
}

// Biblioteca con encapsulamiento real
class Biblioteca {
  #coleccion = [];
  #prestamos = [];

  // Total de libros en la colección
  get totalLibros() {
    return this.#coleccion.length;
  }

  // Cantidad de libros prestados
  get librosPrestados() {
    return this.#prestamos.length;
  }

  // Agrega un libro validando que sea instancia de Libro
  agregar(libro) {
    if (!(libro instanceof Libro)) {
      throw new Error("Solo se pueden agregar instancias de Libro.");
    }
    this.#coleccion.push(libro);
    console.log(`Agregado: ${libro.titulo}`);
  }

  // Presta un libro por ISBN
  prestar(isbn) {
    const libroExiste = this.#coleccion.some(libro => libro.isbn === isbn);
    const yaPrestado = this.#prestamos.includes(isbn);

    if (!libroExiste) {
      console.warn(`No existe un libro con ISBN ${isbn}.`);
      return;
    }

    if (yaPrestado) {
      console.warn(`El libro con ISBN ${isbn} ya está prestado.`);
      return;
    }

    this.#prestamos.push(isbn);
    console.log(`Prestado ISBN ${isbn}`);
  }

  // Devuelve un libro prestado
  devolver(isbn) {
    const index = this.#prestamos.indexOf(isbn);

    if (index === -1) {
      console.warn(`El ISBN ${isbn} no está prestado.`);
      return;
    }

    this.#prestamos.splice(index, 1);
    console.log(`Devuelto ISBN ${isbn}`);
  }

  // Busca libros por autor
  buscarPorAutor(autor) {
    return this.#coleccion.filter(libro => libro.autor === autor);
  }

  // Busca libros por tipo/clase
  buscarPorTipo(Clase) {
    return this.#coleccion.filter(libro => libro instanceof Clase);
  }

  // Exporta la colección completa a JSON
  exportarCatalogo() {
    return JSON.stringify(this.#coleccion);
  }

  // Crea una nueva biblioteca desde JSON como libros básicos
  static importarDesdeJSON(json) {
    const datos = JSON.parse(json);
    const nuevaBiblioteca = new Biblioteca();

    datos.forEach(item => {
      const libro = new Libro(item.titulo, item.autor, item.año, item.paginas, item.isbn);
      nuevaBiblioteca.#coleccion.push(libro);
    });

    return nuevaBiblioteca;
  }

  // Genera un reporte completo de la biblioteca
  generarReporte() {
    const librosDigitales = this.buscarPorTipo(LibroDigital);
    const enciclopedias = this.buscarPorTipo(Enciclopedia);
    const librosBasicos = this.#coleccion.filter(
      libro => !(libro instanceof LibroDigital) && !(libro instanceof Enciclopedia)
    );

    const masAntiguo = this.#coleccion.reduce((antiguo, actual) =>
      actual.año < antiguo.año ? actual : antiguo
    );
    const masNuevo = this.#coleccion.reduce((nuevo, actual) =>
      actual.año > nuevo.año ? actual : nuevo
    );

    console.log("--- REPORTE DE BIBLIOTECA ---");
    console.log(`Total libros: ${this.totalLibros}`);
    console.log(`Libros prestados: ${this.librosPrestados}`);
    console.log(`Libros base: ${librosBasicos.length}`);
    console.log(`Libros digitales: ${librosDigitales.length}`);
    console.log(`Enciclopedias: ${enciclopedias.length}`);
    console.log(`Más antiguo: ${masAntiguo.resumen()}`);
    console.log(`Más nuevo: ${masNuevo.resumen()}`);
  }
}

// ----------------------
// Script de prueba
// ----------------------
const biblioteca = new Biblioteca();

const libros = [
  new Libro("Clean Code", "Robert C. Martin", 2008, 464, "ISBN-001"),
  new Libro("JavaScript: The Good Parts", "Douglas Crockford", 2008, 176, "ISBN-002"),
  new Libro("El Principito", "Antoine de Saint-Exupéry", 1943, 96, "ISBN-003"),
  new LibroDigital("Eloquent JavaScript", "Marijn Haverbeke", 2018, 472, "ISBN-004", "PDF", 12.5),
  new LibroDigital("You Don't Know JS", "Kyle Simpson", 2015, 278, "ISBN-005", "EPUB", 8.2),
  new Enciclopedia("Enciclopedia de la Ciencia", "Varios", 1999, 900, "ISBN-006", 1, "Ciencia"),
  new Enciclopedia("Atlas del Mundo", "Varios", 2005, 640, "ISBN-007", 2, "Geografía"),
  new Libro("Harry Potter y la piedra filosofal", "J.K. Rowling", 1997, 320, "ISBN-008")
];

console.log("--- 1) Agregar libros ---");
libros.forEach(libro => biblioteca.agregar(libro));
console.log("");

console.log("--- 2) Agregar elemento inválido ---");
try {
  biblioteca.agregar({ titulo: "Objeto inválido" });
} catch (error) {
  console.error(error.message);
}
console.log("");

console.log("--- 3) Prestar libros ---");
biblioteca.prestar("ISBN-001");
biblioteca.prestar("ISBN-004");
biblioteca.prestar("ISBN-006");
console.log("");

console.log("--- 4) Devolver y repetir préstamo ---");
biblioteca.devolver("ISBN-004");
biblioteca.prestar("ISBN-004");
biblioteca.prestar("ISBN-004");
console.log("");

console.log("--- 5) Buscar por autor ---");
biblioteca.buscarPorAutor("Robert C. Martin").forEach(libro => console.log(libro.resumen()));
console.log("");

console.log("--- 6) Libros digitales y tiempo de lectura ---");
biblioteca.buscarPorTipo(LibroDigital).forEach(libro => {
  console.log(`${libro.resumen()} | tiempo de lectura: ${libro.tiempoDeLectura()}`);
});
console.log("");

console.log("--- 7) Exportar catálogo ---");
const catalogoJSON = biblioteca.exportarCatalogo();
console.log(catalogoJSON);
console.log("");

console.log("--- 8) Importar catálogo ---");
const nuevaBiblioteca = Biblioteca.importarDesdeJSON(catalogoJSON);
console.log(`Nueva biblioteca total de libros: ${nuevaBiblioteca.totalLibros}`);
console.log("");

console.log("--- 9) Generar reporte ---");
biblioteca.generarReporte();