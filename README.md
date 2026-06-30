# M5-L1 · Programación Orientada a Objetos en JavaScript

Repositorio con ejercicios prácticos y un proyecto final sobre **Programación Orientada a Objetos (POO)** en JavaScript.

## Descripción

Este proyecto contiene:

- 6 ejercicios individuales.
- 1 proyecto final integrador.
- Una página principal en la raíz del repositorio con enlaces a cada actividad.
- Un archivo `styles.css` compartido para mantener una apariencia coherente.

Cada ejercicio tiene su propio `index.html` y `index.js`, para poder probar la lógica directamente desde el navegador y ver los resultados en la consola.

## Estructura del proyecto

```text
m5-l1-poo/
├── index.html
├── styles.css
├── ej1/
│   ├── index.html
│   └── index.js
├── ej2/
│   ├── index.html
│   └── index.js
├── ej3/
│   ├── index.html
│   └── index.js
├── ej4/
│   ├── index.html
│   └── index.js
├── ej5/
│   ├── index.html
│   └── index.js
├── ej6/
│   ├── index.html
│   └── index.js
└── proyecto-final/
    ├── index.html
    └── index.js
```

## Ejercicios

### Ejercicio 1 · La Clase Círculo
- Clase `Circulo`
- Getter `diametro`
- Métodos `area()`, `perimetro()`, `toString()`
- Método estático `elMasGrande(c1, c2)`

### Ejercicio 2 · Inventario de una Tienda
- Clase `Producto`
- Métodos para stock, descuentos, ventas y resumen
- Uso de arrays para filtrar, ordenar y calcular promedios

### Ejercicio 3 · Tu Perfil de Desarrollador/a
- Objeto literal `miPerfil`
- Métodos para presentarse, agregar lenguajes y calcular nivel de experiencia

### Ejercicio 4 · Flota de Vehículos
- Herencia con `Vehiculo`, `Auto`, `Moto` y `Camion`
- Uso de `extends` y `super()`

### Ejercicio 5 · Figuras Geométricas Polimórficas
- Clase base `Figura`
- Polimorfismo con `Triangulo`, `Rectangulo` y `Circulo`
- Cálculo de áreas y suma total

### Ejercicio 6 · Carrito de Compras Encapsulado
- Encapsulamiento con campos privados
- Getter `total`
- Manejo de ítems, cupones y resumen

### Proyecto Final · Sistema de Gestión de una Librería
- Clases `Libro`, `LibroDigital`, `Enciclopedia` y `Biblioteca`
- Herencia, polimorfismo, encapsulamiento y JSON
- Exportación e importación de catálogo

## Cómo usarlo

1. Clona o descarga el repositorio.
2. Abre la carpeta del ejercicio que quieras revisar.
3. Ejecuta el `index.html` en tu navegador.
4. Abre la consola con `F12` para ver los resultados del `index.js`.

## Publicación en GitHub Pages

Este proyecto está preparado para publicarse en GitHub Pages usando:

- **Branch:** `main`
- **Folder:** `/ (root)`

La página principal del sitio está en el archivo `index.html` ubicado en la raíz del repositorio.

## Notas

- Los ejercicios están pensados para practicar POO paso a paso.
- El código de cada actividad puede probarse directamente desde la consola del navegador.
- El archivo `styles.css` se comparte entre todas las páginas para mantener una interfaz uniforme.

## Puedes ver el resultado en:

https://zakkdruzer.github.io/m5-l1-poo/
