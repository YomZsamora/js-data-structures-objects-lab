// Defined a driver variable and assign it to an Object. Updates will be applied to this variable (destructively and non-destructively).
const driver = {};

// Returns a new driver that has an updated value for the key passed in
let updateDriverWithKeyAndValue = (driverObject, key, value) => {
   return Object.assign({}, driverObject, { [key]: value })
}

// Function mutates the driver parameter passed in. Updates `driver` with the given `key` and `value` (it is destructive).
let destructivelyUpdateDriverWithKeyAndValue = (driverObject, key, value) => {
   return Object.assign(driverObject, { [key]: value })
}