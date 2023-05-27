class Figura {
  color;
  area;
  constructor({ color, area }) {
    this.area = area;
    this.color = color;
  }
  calcularArea() {
    return `El área de la figura ${this.color} calculada es de ${this.area}`;
  }
}
const BOTON_AREA = document.getElementById("boton-figura");
BOTON_AREA.addEventListener("click", (e) => {
  e.preventDefault();
  const COLOR = document.getElementById("color-figura").value;
  const AREA = document.getElementById("area-figura").value;
  let figura1 = new Figura({ color: COLOR, area: AREA });
  const CONTENEDOR = document.getElementById("resultado-figura");
  CONTENEDOR.innerHTML = `<h2>${figura1.calcularArea()}</h2>`;
});

class Circulo extends Figura {
  area;
  radio;
  constructor({ color, radio }) {
    super({ color });
    this.radio = radio;
    this.area = Math.PI * parseInt(this.radio) ** 2;
  }
  calcularArea() {
    return `El área del círculo es ${this.area.toFixed(2)}`;
  }
}
const BOTON_CIRCULO = document.getElementById("boton-circulo");
BOTON_CIRCULO.addEventListener("click", (e) => {
  e.preventDefault();
  const COLOR = document.getElementById("color-circulo").value;
  const RADIO = document.getElementById("radio-circulo").value;
  let circulo1 = new Circulo({ color: COLOR, radio: RADIO });
  const CONTENEDOR = document.getElementById("resultado-circulo");
  CONTENEDOR.innerHTML = `<h2>${circulo1.calcularArea()}</h2>`;
});

class Rectangulo extends Figura {
  area;
  base;
  altura;
  constructor({ color, base, altura }) {
    super({ color });
    this.base = base;
    this.altura = altura;
    this.area = parseInt(base) * parseInt(altura);
  }
  calcularArea() {
    return `El área del rectangulo es ${this.area}`;
  }
}
const BOTON_RECTANGULO = document.getElementById("boton-rectangulo");
BOTON_RECTANGULO.addEventListener("click", (e) => {
  e.preventDefault();
  const COLOR = document.getElementById("color-rectangulo").value;
  const BASE = document.getElementById("base-rectangulo").value;
  const ALTURA = document.getElementById("altura-rectangulo").value;
  let rectangulo1 = new Rectangulo({
    color: COLOR,
    base: BASE,
    altura: ALTURA,
  });
  const CONTENEDOR = document.getElementById("resultado-rectangulo");
  CONTENEDOR.innerHTML = `<h2>${rectangulo1.calcularArea()}</h2>`;
});
