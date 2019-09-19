const { colors } = require('colors');
const emoji = require('node-emoji')

exports.attack = ({ weapon }) => {
  console.log('\nAttacking...');
  console.log(`Preparing weapon: ${weapon}`.magenta);
  console.log(`Throwing weapon: ${weapon} ${emoji.get('knife')}`);
}