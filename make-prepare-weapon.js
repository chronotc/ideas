const { colors } = require('colors');

exports.makePrepareWeapon =
({}) =>
  ({
    weapon
  }) => {
    console.log(`Preparing weapon: ${weapon}`.magenta);
  };