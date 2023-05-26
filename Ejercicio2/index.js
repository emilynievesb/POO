class Animal {
  nombre;
  edad;
  constructor({ nombre, edad }) {
    this.nombre = nombre;
    this.edad = edad;
  }
  hacerSonido(sonido) {
    return `${this.name} hace ${sonido}`;
  }
}

const BOTON_SONIDO = document.getElementById("boton-sonido");
BOTON_SONIDO.addEventListener("click", (e) => {
  e.preventDefault();
  const NOMBRE = document.getElementById("nombre-animal").value;
  const EDAD = document.getElementById("edad-animal").value;
  const SONIDO = document.getElementById("sonido-animal").value;
  let animal1 = new Animal({ nombre: NOMBRE, edad: EDAD });
  const CONTENEDOR = document.getElementById("resultado-animal");
  CONTENEDOR.innerHTML = `<h2>${animal1.hacerSonido(SONIDO)}</h2>`;
});

class Perro extends Animal {
  raza;
  constructor({ nombre, edad, raza }) {
    super({ nombre, edad });
    this.raza = raza;
  }
  hacerSonido() {
    return `${this.nombre} hace woof!`;
  }
  moverCola() {
    return `${this.nombre} está moviendo la cola`;
  }
}

const BOTON_COLA = document.getElementById("boton-cola");
BOTON_COLA.addEventListener("click", (e) => {
  e.preventDefault();
  const NOMBRE = document.getElementById("nombre-perro").value;
  console.log(NOMBRE);
  const EDAD = document.getElementById("edad-perro").value;
  const RAZA = document.getElementById("raza-perro").value;
  let perro1 = new Perro({ nombre: NOMBRE, edad: EDAD, raza: RAZA });
  console.log(perro1);
  const CONTENEDOR = document.getElementById("resultado-perro");
  CONTENEDOR.innerHTML = `<h2>${perro1.hacerSonido()} y ${perro1.moverCola()}</h2>`;
});
