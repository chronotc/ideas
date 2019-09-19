const { colors } = require('colors');
const emoji = require('node-emoji')

class Ninja {
  constructor({ name }) {
    this.name = name;
  }

  attack({ weapon }) {
    console.log(`\n${this.name} is attacking...`);
    this.prepareWeapon({ weapon });
    this.throwWeapon({ weapon });
  }

  throwWeapon({ weapon }) {
    console.log(`Throwing weapon: ${weapon} ${emoji.get('knife')}`);
  }

  prepareWeapon({ weapon }) {
    console.log(`Preparing weapon: ${weapon}`.magenta);
  }
}

module.exports = {
  Ninja
};
