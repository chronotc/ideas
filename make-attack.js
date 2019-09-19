exports.makeAttack =
({
  prepareWeapon,
  throwWeapon
}) =>
  ({
    weapon
  }) => {
    console.log('\nAttacking...');
    prepareWeapon({ weapon });
    throwWeapon({ weapon });
  }