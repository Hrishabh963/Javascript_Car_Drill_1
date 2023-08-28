module.exports = function filterBMWAndAudiCars(inventory) {
    const bmwAndAudiCars = [];
    for (let index = 0; index < inventory.length; index++) {
        if (inventory[index].car_make === 'BMW' || inventory[index].car_make === 'Audi') {
            bmwAndAudiCars.push(inventory[index]);
        }
    }
    return bmwAndAudiCars;
}