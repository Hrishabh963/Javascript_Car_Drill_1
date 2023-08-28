const inventory = require('../inventory');
const problem4 = require('../problem4');
const problem5 = require('../problem5');
const carYears = problem4(inventory);
const olderCars = problem5(carYears);
console.log(`Number of cars older than year 2000 are ${olderCars.length}`);