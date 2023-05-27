class Vehiculo {
  marca;
  modelo;
  velocidad;
  constructor({ marca, modelo, velocidad }) {
    this.modelo = modelo;
    this.marca = marca;
    this.velocidad = velocidad;
  }
  static convertirKmHEnMph(km) {
    return km / 1.60934;
  }
  acelerar() {
    return `La velocidad es de ${(this.velocidad += 10)}`;
  }
}
const BOTON_VEHICULO = document.getElementById("boton-vehiculo");
BOTON_VEHICULO.addEventListener("click", (e) => {
  e.preventDefault();
  const MARCA = document.getElementById("marca-carro").value;
  const MODELO = document.getElementById("modelo-carro").value;
  const VELOCIDAD = document.getElementById("velocidad-carro").value;
  let vehiculo1 = new Vehiculo({
    marca: MARCA,
    modelo: MODELO,
    velocidad: Number(VELOCIDAD),
  });
  const CONTENEDOR = document.getElementById("resultado-vehiculo");
  CONTENEDOR.innerHTML = `<h2>${vehiculo1.acelerar()}</h2><h2>La velocidad en Mph es de ${Vehiculo.convertirKmHEnMph(
    Number(VELOCIDAD)
  )} mph</h2>`;
});
class Coche extends Vehiculo {
  combustible;
  constructor({ marca, modelo, velocidad, combustible }) {
    super({ modelo, marca, velocidad });
    this.combustible = combustible;
  }
  acelerar() {
    return `La velocidad es de ${(this.velocidad += 20)}`;
  }
}
const BOTON_COCHE = document.getElementById("boton-coche");
BOTON_COCHE.addEventListener("click", (e) => {
  e.preventDefault();
  const MARCA = document.getElementById("marca-coche").value;
  const MODELO = document.getElementById("modelo-coche").value;
  const VELOCIDAD = document.getElementById("velocidad-coche").value;
  const COMBUSTIBLE = document.getElementById("combustible-coche").value;
  let coche1 = new Coche({
    marca: MARCA,
    modelo: MODELO,
    velocidad: Number(VELOCIDAD),
    combustible: COMBUSTIBLE,
  });
  const CONTENEDOR = document.getElementById("resultado-coche");
  CONTENEDOR.innerHTML = `<h2>${coche1.acelerar()}</h2><h2>La velocidad en Mph es de ${Coche.convertirKmHEnMph(
    Number(VELOCIDAD)
  )} mph</h2>`;
});
