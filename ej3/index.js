console.log("%cEjercicio 3 - Tu Perfil de Desarrollador/a", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// Objeto literal que representa tu perfil de desarrollador/a
const miPerfil = {
  nombre: 'José Gajardo',
  edad: 35,
  ciudad: 'Punta Arenas',
  lenguajes: ['HTML', 'CSS', 'JavaScript','Bootstrap'],
  añosDeExperiencia: 2,
  buscandoTrabajo: true,

  presentarse() {
    const estado = this.buscandoTrabajo ? 'sí' : 'no';
    console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años, vivo en ${this.ciudad} y manejo ${this.lenguajes.join(', ')}.`);
    console.log(`Tengo ${this.añosDeExperiencia} años de experiencia y actualmente busco trabajo: ${estado}.`);
  },

  agregarLenguaje(lenguaje) {
    if (this.lenguajes.includes(lenguaje)) {
      console.log(`${lenguaje} ya existe en la lista.`);
      return;
    }

    this.lenguajes.push(lenguaje);
    console.log(`${lenguaje} fue agregado correctamente.`);
  },

  nivelExperiencia() {
    if (this.añosDeExperiencia <= 2) return 'Junior';
    if (this.añosDeExperiencia <= 5) return 'Semi-Senior';
    return 'Senior';
  }
};

// 1) Presentación completa
console.log("--- 1) Presentación completa ---")
miPerfil.presentarse();
console.log("")

// 2) Nivel de experiencia
console.log("--- 2) Nivel de experiencia ---")
console.log(`Nivel de experiencia: ${miPerfil.nivelExperiencia()}`);
console.log("")

// 3) Agregar 2 lenguajes nuevos
console.log("--- 3) Agregar 2 lenguajes nuevos ---")
miPerfil.agregarLenguaje('TypeScript');
miPerfil.agregarLenguaje('React');
console.log("")

// 4) Intentar agregar uno repetido
console.log("--- 4) Intentar agregar uno repetido ---")
miPerfil.agregarLenguaje('JavaScript');
console.log("")

// 5) Imprimir nuevamente la lista de lenguajes
console.log("--- 5) Imprimir nuevamente la lista de lenguajes ---")
console.log('Lenguajes actuales:', miPerfil.lenguajes);
console.log("")

// 6) Recorrer e imprimir todas las propiedades que no sean funciones
console.log("--- 6) Recorrer e imprimir todas las propiedades que no sean funciones ---")
console.log('--- Propiedades del perfil ---');
for (const clave in miPerfil) {
  if (typeof miPerfil[clave] !== 'function') {
    console.log(`${clave}:`, miPerfil[clave]);
  }
}