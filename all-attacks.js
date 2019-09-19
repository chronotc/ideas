const prepareWeapon = ({ weapon }) => console.log(`Preparing weapon: ${weapon}`);
const throwWeapon = ({ weapon }) => console.log(`Throwing weapon: ${weapon}`);

exports.attack = ({ weapon }) => {
  prepareWeapon({ weapon });
  throwWeapon({ weapon });
}