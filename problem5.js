module.exports = function countCarsBefore2000(carYears) {
    const olderCars = [];
    for (let index = 0; index < carYears.length; index++) {
        if (carYears[index] < 2000) {
            olderCars.push(carYears[index]);
        }
    }
    return olderCars;
}