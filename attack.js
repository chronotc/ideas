const { prepareWeapon }= require('./prepare-weapon');
const { throwWeapon }= require('./throw-weapon');

exports.attack = ({ weapon }) => {
  console.log('\nAttacking...');
  prepareWeapon({ weapon });
  throwWeapon({ weapon });
};
