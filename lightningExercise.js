// lightning 1-3

const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

const doctorBill = {
    officeName: "Hansen Pediatrics",
    streetAddress: "123 South St",
    doctorName: "Dr. Frank",
    patientName: "Nick",
    visitDate: "1/1/19",
    amountBilled: "$125.00",
    dueDate: "1/10/19"
};

// Use square bracket notation to output the value of those three properties to the console in Chrome.

console.log(doctorBill[dateVisited], doctorBill[owed], doctorBill[patient]);

// Use Object.values() to output all the property values to the console in Chrome.

for (const value of Object.values(doctorBill)) {
    console.log(value) 
};

// Lightning Exercise 1: Output all of the key names from your doctor's office bill to the console in Chrome.

//for in used to loop through an object only
for (let key in doctorBill) {
    console.log(key)
};

// Lightning Exercise 2: Output all of the key names from your doctor's office bill to the DOM inside a parent <section> element. Wrap each one in a <span> element. 

const doctorsOffice = document.createElement("section");
outputElement.appendChild(doctorsOffice);

for (const key of Object.keys(doctorBill)) {
    doctorsOffice.innerHTML += `<span>${key}</span>`
}

// Lightning Exercise 1: Create an object to represent your favorite dinner item (e.g. meatloaf, spaghetti, fried fish, gumbo). Each object should have a name property, but you can add any other properties that you like, such as size, weight, ethnicity, vegetarian boolean.

const favoriteFood = [
    {
    name: "ribs",
    style: "bbq",
    vegitarian: false
},
{
    name: "spagetti",
    style: "italian",
    vegitarian: false
}];

// Lightning Exercise 2: Output all of the key/value pairs into the DOM inside an <article> element with a class of food.
// each dinner item is an article (two objects, two articles)

favoriteFood.forEach(favoriteitem => {
    let stringofHTML = '<article class="food">';
    for (const entrySet of Object.entries(favoriteitem)) {
        stringofHTML += `<div>${entrySet[0]}: ${entrySet[1]}</div>`
    }
    outputElement.innerHTML += stringofHTML + "</article>"
})

//above, we created an article and put a loop inside the artice tag to create a list of key value pairs