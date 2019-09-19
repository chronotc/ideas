const { colors } = require('colors');
const emoji = require('node-emoji')

exports.prepareWeapon = ({ weapon }) => console.log(`Preparing weapon: ${weapon}`.magenta);