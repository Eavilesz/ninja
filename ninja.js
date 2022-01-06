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
      `Nombre: ${this.nombre}, salud:${this.salud}, velocidad:${this.velocidad} y fuerza:${this.fuerza}.`
    );
  }
  drinkSake() {
    this.salud += 10;
  }
}

class Sensei extends Ninja {
  constructor(nombre) {
    super(nombre, 200);
    this.velocidad = 10;
    this.fuerza = 10;
    this.sabiduria = 10;
  }
  speakWisdom() {
    super.drinkSake();
    console.log(
      "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
    );
  }
}

const ninja1 = new Ninja("Hyabusa", 0);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
console.log(ninja1.salud);

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
