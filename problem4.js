module.exports = function getCarYears(inventory) {
    const carYears = [];
    for (let index = 0; index < inventory.length; index++) {
        carYears.push(inventory[index].car_year);
    }
    return carYears;
}