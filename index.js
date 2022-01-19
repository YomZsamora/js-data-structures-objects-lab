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

// Deletes `key` from a clone of driver and returns the new driver. Does not modify the original driver (it is non-destructive).
let deleteFromDriverByKey = (driverObject, key) => {
   let newDriver = Object.assign({}, driverObject);
   delete newDriver[key];
   return newDriver;
}

// Modifies the original driver object by return driver object with the key/value pair
let destructivelyDeleteFromDriverByKey = (driverObject, key) => {
   delete driverObject[key]
   return driverObject
}