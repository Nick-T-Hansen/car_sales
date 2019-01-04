// Randall has come back with a new job for you. Each week, he wants to see a report of how many cars each salesperson sells for that week. Here's his requirements to display for each sale.

// Display the first and last name of the sales agent.
// Display all keys and values for the car sold.
// Display the gross profit made on the sale.


// You will need to start off by iterating the array of sales with a forEach() method. Then iterate the entries of the vehicle property of each sale.
let salesContainer = document.querySelector("#app")

salesByWeek.forEach(sale => {
    salesContainer.innerHTML += `<h2> ${sale.sales_agent.first_name} ${sale.sales_agent.last_name} </h2>`;
    
    for (const entry of Object.entries(sale.vehicle)) {
        salesContainer.innerHTML += `<div>${entry[0]}: ${entry[1]}`
    };
    
    salesContainer.innerHTML += `<p>$${sale.gross_profit} </p>`
});
