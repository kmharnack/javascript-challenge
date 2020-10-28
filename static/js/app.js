// from data.js
// var tableData = data;
// Level 1: Automatic Table and Date Search (Required)
// Get a reference to the table body
var ufotable = d3.select("ufo-table");
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);

// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

var button = d3.select("#filter-btn");

var form = d3.select("#filters");

var inputElement = d3.select("#datetime");

button.on("click", () => {
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    tbody.remove();
    tbody = ufotable.append("tbody");
    data.filter(data => data.datetime == inputValue)
        .forEach(ufoSighting => {
            var row = tbody.append("tr");
            Object.entries(ufoSighting).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        });
})


// // // Create event handlers 
// button.on("click", runEnter);
// form.on("submit",runEnter);
// 
// // // Complete the event handler function for the form
// function runEnter() {
// 
// //   // Prevent the page from refreshing
//   d3.event.preventDefault();
  
// //   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#datetime");
// 
// //   // Get the value property of the input element
//   var inputValue = inputElement.property("value");
//   console.log(inputValue);
//   console.log(tableData);
//   var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === inputValue);
//   console.log(filteredData);
// // Level 2: Multiple Search Categories (Optional)
// 
// // Using multiple input tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:
// 
// // date/time
// // city
// // state
// // country
// // shape