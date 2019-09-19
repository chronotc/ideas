const emoji = require('node-emoji')

exports.throwWeapon = ({ weapon }) => console.log(`Throwing weapon: ${weapon} ${emoji.get('knife')}`);