const { makePrepareWeapon } = require('./make-prepare-weapon');
const { makeThrowWeapon } = require('./make-throw-weapon');
const { makeAttack } = require('./make-attack');

const { prepareWeapon } = require('./prepare-weapon');
const { throwWeapon } = require('./throw-weapon');

// all makes
const attack = makeAttack({
  prepareWeapon: makePrepareWeapon({}),
  throwWeapon: makeThrowWeapon({}),
});

// half makes
const attack2 = makeAttack({
  prepareWeapon,
  throwWeapon
});

// no makes
const { attack: attack3 } = require('./attack');

// inline
const { attack: attack4 } = require('./all-attacks');

// class
const { Ninja } = require('./Ninja');

attack({ weapon: 'knife' });

attack2({ weapon: 'bow' });

attack3({ weapon: 'sword' });

attack4({ weapon: 'axe', name: 'Bob' });

const ninja = new Ninja({ name: 'Bob' });
ninja.attack({ weapon: 'stone' });