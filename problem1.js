function findCarWithId33(inventory) {
    for (let index = 0; index < inventory.length; index++) {
        if (inventory[index].id === 33) {
            return inventory[index];
        }
    }
}
module.exports = findCarWithId33;