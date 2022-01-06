class Ninja {
  constructor(nombre, salud) {
    this.nombre = nombre;
    this.salud = salud;
    this.velocidad = 3;
    this.fuerza = 3;
  }
  sayName() {
    console.log(this.nombre);
  }
  showStats() {
    console.log(
      `nombre: ${this.nombre}, salud:${this.salud}, velocidad:${this.velocidad} y fuerza:${this.fuerza}.`
    );
  }
  drinkSake() {
    this.salud += 10;
  }
}

const ninja1 = new Ninja("Hyabusa", 10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
console.log(ninja1.salud);
