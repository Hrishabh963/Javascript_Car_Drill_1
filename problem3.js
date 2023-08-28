function sortCarModelsAlphabetically(inventory) {
    const sortedModels = [];
    for (let index = 0; index < inventory.length; index++) {
        sortedModels.push(inventory[index].car_model);
    }
    return sortedModels.sort();
}
module.exports = sortCarModelsAlphabetically;