const emoji = require('node-emoji')

exports.makeThrowWeapon =
  ({}) => ({ weapon }) => console.log(`Throwing: ${weapon} ${emoji.get('knife')}`);