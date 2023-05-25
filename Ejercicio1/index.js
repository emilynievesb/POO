class Persona {
  nombre;
  edad;
  sexo;
  constructor({ nombre = "Jhon", edad = 20, sexo = "Indefinido" }) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
  }
  static esMayorDeEdad(edad) {
    let validacion;
    if (edad >= 18) {
      validacion = true;
      return `Mayor de edad: ${validacion}`;
    } else {
      validacion = false;
      return `Mayor de edad: ${validacion}`;
    }
  }
  saludar() {
    return `Hola ${this.nombre}, buen día jejejejeje`;
  }
}
const BOTON_SALUDO = document.getElementById("boton-saludar");
BOTON_SALUDO.addEventListener("click", (e) => {
  e.preventDefault();
  const NOMBRE = document.getElementById("nombre-persona").value;
  const EDAD = document.getElementById("edad-persona").value;
  const SEXO = document.getElementById("sexo-persona").value;
  let persona1 = new Persona({ nombre: NOMBRE, edad: EDAD, sexo: SEXO });
  const CONTENEDOR_SALUDO = document.getElementById("resultado-persona");
  console.log(persona1.saludar());
  if (NOMBRE !== "" && SEXO !== 0 && EDAD > 10) {
    CONTENEDOR_SALUDO.innerHTML = `<h2>${persona1.saludar()}</h2><h2>${Persona.esMayorDeEdad(
      EDAD
    )}</h2>`;
  } else {
    alert("Por favor ingresa los datos correctamente");
  }
});
class Estudiante extends Persona {
  carrera;
  constructor({ nombre, edad, sexo, carrera }) {
    super({ nombre, edad, sexo });
    this.carrera = carrera;
  }
  estudiar() {
    return `Estudias ${this.carrera}`;
  }
}
const BOTON_ESTUDIAR = document.getElementById("boton-estudiar");
BOTON_ESTUDIAR.addEventListener("click", (e) => {
  e.preventDefault();
  const NOMBRE = document.getElementById("nombre-estudiante").value;
  const EDAD = document.getElementById("edad-estudiante").value;
  const SEXO = document.getElementById("sexo-estudiante").value;
  const CARRERA = document.getElementById("carrera-estudiante").value;
  let estudiante1 = new Estudiante({
    nombre: NOMBRE,
    edad: EDAD,
    sexo: SEXO,
    carrera: CARRERA,
  });
  const CONTENEDOR_ESTUDIANTE = document.getElementById("resultado-estudiante");
  console.log(estudiante1.saludar(), estudiante1.estudiar());
  CONTENEDOR_ESTUDIANTE.innerHTML = `<h2>${estudiante1.saludar()}</h2><h2>${estudiante1.estudiar()}</h2><h2>${Estudiante.esMayorDeEdad(
    EDAD
  )}</h2>`;
});
