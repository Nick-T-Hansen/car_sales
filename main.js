


// Iterate the array of cars with forEach().
// Use Object.values() to iterate the values of each car.

const outputElement = document.querySelector("#app")

// Iterate the array of cars. Individual objects stored in `car`.
// allCars.forEach(car => {

//     //STEP ONE - GET VALUES

//     // Iterate all of the values of the current car
//     for (const value of Object.values(car)) {
//         outputElement.innerHTML += `<div>${value}</div>`
//     }
// });


// STEP TWO- KEYS AND VALUES SEPERATELY

/*
    Just get a reference to the first object since
    they all have the same properties
*/
const firstCar = allCars[0]

// Now iterate its keys
// outputElement.innerHTML += "<h1>Properties</h1>"
// for (const key of Object.keys(allCars[0])) {
//     outputElement.innerHTML += `<div>${key}</div>`
// };

// for (const key in firstCar) {
//     console.log(key, firstCar[key])
// };

// // Iterate the array of cars. Individual objects stored in `car`.
// outputElement.innerHTML += "<h1>Car List</h1>"
// allCars.forEach(car => {

//     // Iterate all of the values of the current car
//     for (const value of Object.values(car)) {
//         outputElement.innerHTML += `<div>${value}</div>`
//     }
// });

// STEP THREE PRINT BOH KEY AND VALUE (shown in console
//object.entries(objectHere) gives an array of arrays- mini arrays have key and values and the big array containes a mini array for each property.
outputElement.innerHTML = "<h1>Car List</h1>"

allCars.forEach(car => {
    outputElement.innerHTML += "<hr/>"

    for (const entry of Object.entries(car)) {
        outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    }
})