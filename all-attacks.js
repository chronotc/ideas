const { colors } = require('colors');
const emoji = require('node-emoji')

const prepareWeapon = ({ weapon }) => console.log(`Preparing weapon: ${weapon}`.magenta);
const throwWeapon = ({ weapon }) => console.log(`Throwing weapon: ${weapon} ${emoji.get('knife')}`);

exports.attack = ({ weapon }) => {
  console.log('\nAttacking...');
  prepareWeapon({ weapon });
  throwWeapon({ weapon });
}