class Empleado {
  nombre;
  edad;
  sueldo;
  static id = 0;
  constructor({ nombre, edad, sueldo }) {
    this.nombre = nombre;
    this.edad = edad;
    this.sueldo = sueldo;
  }
  static generarIdEmpleado() {
    this.id++;
    return this.id;
  }
  calcularSalarioAnual() {
    return this.sueldo * 12;
  }
}
const BOTON_EMPLEADO = document.getElementById("boton-empleado");
BOTON_EMPLEADO.addEventListener("click", (e) => {
  e.preventDefault();
  const NOMBRE = document.getElementById("nombre-empleado").value;
  const EDAD = document.getElementById("edad-empleado").value;
  const SUELDO = document.getElementById("sueldo-empleado").value;
  let empleado1 = new Empleado({
    nombre: NOMBRE,
    edad: EDAD,
    sueldo: Number(SUELDO),
  });
  const CONTENEDOR = document.getElementById("resultado-empleado");
  CONTENEDOR.innerHTML = `<h2>${empleado1.calcularSalarioAnual()}</h2><h2>El id del empleado es ${Empleado.generarIdEmpleado()}</h2>`;
});
class Gerente extends Empleado {
  departamento;
  constructor({ nombre, edad, sueldo, departamento }) {
    super({ nombre, edad, sueldo });
    this.departamento = departamento;
  }
  calcularSalarioAnual() {
    const BONO = this.sueldo * 0.1;
    return (this.sueldo + BONO) * 12;
  }
}
const BOTON_GERENTE = document.getElementById("boton-gerente");
BOTON_GERENTE.addEventListener("click", (e) => {
  e.preventDefault();
  const NOMBRE = document.getElementById("nombre-gerente").value;
  const DEPARTAMENTO = document.getElementById("departamento-gerente").value;
  const EDAD = document.getElementById("edad-gerente").value;
  const SUELDO = document.getElementById("sueldo-gerente").value;
  let gerente1 = new Empleado({
    nombre: NOMBRE,
    departamento: DEPARTAMENTO,
    edad: EDAD,
    sueldo: Number(SUELDO),
  });
  const CONTENEDOR = document.getElementById("resultado-gerente");
  CONTENEDOR.innerHTML = `<h2>${gerente1.calcularSalarioAnual()}</h2><h2>El id del empleado es ${Gerente.generarIdEmpleado()}</h2>`;
});
