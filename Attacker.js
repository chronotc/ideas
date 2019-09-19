class Attacker {
  constructor({ name }) {
    this.name = name;
  }

  attack({ weapon }) {
    console.log(`\n${this.name} is attacking...`);
    this.prepareWeapon({ weapon });
    this.throwWeapon({ weapon });
  }

  throwWeapon({ weapon }) {
    console.log(`Preparing weapon: ${weapon}`);
  }

  prepareWeapon({ weapon }) {
    console.log(`Throwing weapon: ${weapon}`);
  }
}

module.exports = {
  Attacker
};
